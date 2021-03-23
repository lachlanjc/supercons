const path = require('path')
const fs = require('fs')
const glyphs = require('./src/glyphs').default
// const { renderToStaticMarkup: dom } = require('react-dom/server')
const jsxToString = require('jsx-to-string')

// make those folders
const rootDir = path.join(__dirname)
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')
const distDir = path.join(rootDir, 'dist')
const componentsDir = path.join(rootDir, 'dist/components')

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir)
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir)
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir)

const glyphNames = Object.keys(glyphs)
const componentize = (key: string): string =>
  key
    .split('-')
    .map(s => s[0].toUpperCase() + s.substr(1).toLowerCase())
    .join('')
const labelize = (key: string): string =>
  key.replace('-fill', '').replace('view-', '').replace('-', ' ') + ' icon'

const generateComponent = (
  glyph: string,
  component: string,
  children: string,
): string => `import * as React from 'react'

const ${component} = ({
  as: Component = 'svg',
  size = 32,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  as?: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>> | string,
  size?: number | string
}) => (
  <Component
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
    width={size}
    height={size}
    aria-label="${labelize(glyph)}"
    role="img"
    {...props}
  >
    ${children}
  </Component>
)

export default ${component}
`

glyphNames.forEach((key: string) => {
  const name = componentize(key)
  const children = jsxToString(glyphs[key])
  const component = generateComponent(key, name, children)
  fs.writeFileSync(`./src/components/${key}.tsx`, component, 'utf-8', err => {
    if (err) return console.error(err)
  })
})

const glyphExports = glyphNames
  .map(g => `export { default as ${componentize(g)} } from './components/${g}'`)
  .join('\n')
const indexFile = `export { default } from './icon'
export { glyphNames } from './glyphs'

// these files are generated at build & gitignored
${glyphExports}
`
fs.writeFile('./src/index.ts', indexFile, err => console.log(err))

console.log('Yay! You look cute today.')

// TODO
// Write SVG files to dist/icons/xyz.svg
