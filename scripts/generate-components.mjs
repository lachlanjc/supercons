import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(scriptDir, '..')
const glyphsPath = path.join(rootDir, 'src', 'glyphs.tsx')
const componentsDir = path.join(rootDir, 'src', 'components')

const glyphSource = fs.readFileSync(glyphsPath, 'utf8')

function toComponentName(glyphName) {
  const pascalCase = glyphName
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(part => part[0].toUpperCase() + part.slice(1))
    .join('')

  if (!pascalCase) {
    throw new Error(`Could not derive component name for "${glyphName}"`)
  }

  return /^[A-Za-z_$]/.test(pascalCase) ? pascalCase : `Icon${pascalCase}`
}

function indent(text, spaces) {
  const prefix = ' '.repeat(spaces)
  return text
    .split('\n')
    .map(line => `${prefix}${line}`)
    .join('\n')
}

function skipIgnored(source, index) {
  let i = index
  while (i < source.length) {
    while (i < source.length && /\s/.test(source[i])) i += 1

    if (source[i] === '/' && source[i + 1] === '/') {
      i += 2
      while (i < source.length && source[i] !== '\n') i += 1
      continue
    }

    if (source[i] === '/' && source[i + 1] === '*') {
      i += 2
      while (
        i + 1 < source.length &&
        !(source[i] === '*' && source[i + 1] === '/')
      ) {
        i += 1
      }
      i += 2
      continue
    }

    break
  }

  return i
}

function readQuotedString(source, index) {
  const quote = source[index]
  let i = index + 1
  let value = ''

  while (i < source.length) {
    if (source[i] === '\\') {
      value += source.slice(i, i + 2)
      i += 2
      continue
    }

    if (source[i] === quote) {
      return { value, end: i + 1 }
    }

    value += source[i]
    i += 1
  }

  throw new Error(`Unterminated string at index ${index}`)
}

function findMatching(source, startIndex, openChar, closeChar) {
  let depth = 0
  let i = startIndex

  while (i < source.length) {
    i = skipIgnored(source, i)
    if (i >= source.length) break

    if (source[i] === '"' || source[i] === "'" || source[i] === '`') {
      i = readQuotedString(source, i).end
      continue
    }

    if (source[i] === openChar) depth += 1

    if (source[i] === closeChar) {
      depth -= 1
      if (depth === 0) return i
    }

    i += 1
  }

  throw new Error(`Unmatched "${openChar}" in glyph source`)
}

function findGlyphBody(source) {
  const startMatch = /export const glyphs\s*=\s*{/.exec(source)
  if (!startMatch) {
    throw new Error('Could not find `glyphs` object in src/glyphs.tsx')
  }

  const startBrace = startMatch.index + startMatch[0].length - 1
  const endBrace = findMatching(source, startBrace, '{', '}')
  return source.slice(startBrace + 1, endBrace)
}

function readExpression(source, index) {
  let i = index
  let paren = 0
  let brace = 0
  let bracket = 0

  while (i < source.length) {
    i = skipIgnored(source, i)
    if (i >= source.length) break

    if (source[i] === '"' || source[i] === "'" || source[i] === '`') {
      i = readQuotedString(source, i).end
      continue
    }

    const char = source[i]

    if (char === '(') paren += 1
    if (char === ')') paren -= 1
    if (char === '{') brace += 1
    if (char === '}') brace -= 1
    if (char === '[') bracket += 1
    if (char === ']') bracket -= 1

    if (char === ',' && paren === 0 && brace === 0 && bracket === 0) {
      return { text: source.slice(index, i).trim(), end: i + 1 }
    }

    i += 1
  }

  return { text: source.slice(index).trim(), end: source.length }
}

function stripOuterParens(expression) {
  const text = expression.trim()
  if (!text.startsWith('(') || !text.endsWith(')')) return text

  return findMatching(text, 0, '(', ')') === text.length - 1
    ? text.slice(1, -1).trim()
    : text
}

function parseGlyphEntries(source) {
  const body = findGlyphBody(source)
  const entries = []
  let i = 0

  while (i < body.length) {
    i = skipIgnored(body, i)
    if (i >= body.length) break

    let glyphName

    if (body[i] === "'" || body[i] === '"') {
      const key = readQuotedString(body, i)
      glyphName = key.value
      i = key.end
    } else {
      const match = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(body.slice(i))
      if (!match) {
        throw new Error(`Could not parse glyph key near: ${body.slice(i, i + 30)}`)
      }
      glyphName = match[0]
      i += glyphName.length
    }

    i = skipIgnored(body, i)
    if (body[i] !== ':') {
      throw new Error(`Expected ":" after glyph key "${glyphName}"`)
    }

    i = skipIgnored(body, i + 1)
    const { text, end } = readExpression(body, i)
    entries.push({ glyphName, value: stripOuterParens(text) })
    i = end
  }

  return entries
}

fs.mkdirSync(componentsDir, { recursive: true })

for (const file of fs.readdirSync(componentsDir)) {
  if (file.endsWith('.tsx')) {
    fs.unlinkSync(path.join(componentsDir, file))
  }
}

let generated = 0

for (const { glyphName, value } of parseGlyphEntries(glyphSource)) {
  const componentName = toComponentName(glyphName)
  const componentPath = path.join(componentsDir, `${componentName}.tsx`)

  const componentSource = `import React from 'react'

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 32, ...props }, ref) => (
    <svg
      ref={ref}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
${indent(value, 6)}
    </svg>
  ),
)

${componentName}.displayName = '${componentName}'

export default ${componentName}
`

  fs.writeFileSync(componentPath, componentSource)
  generated += 1
}

console.log(
  `Generated ${generated} components in ${path.relative(rootDir, componentsDir)}`,
)
