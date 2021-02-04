const glyphs = require('./src/glyphs').default
const fs = require('fs')
// const { renderToStaticMarkup: dom } = require('react-dom/server')
const jsxToString = require('jsx-to-string')

const generateComponent = (name: string, children: string): string =>`import React from 'react'

function ${name}<T extends React.ElementType = 'svg'>({
  as: Component = 'svg',
  size = 32,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) {
  return (
    <Component
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={glyph}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      role="img"
      {...props}
    >
      ${children}
    </Component>
  )
}

export default ${name}
`

const glyphNames = Object.keys(glyphs)
const componentize = (key: string): string =>
  key
    .split('-')
    .map(s => s[0].toUpperCase() + s.substr(1).toLowerCase())
    .join('')

glyphNames.forEach((key: string) => {
  const name = componentize(key)
  const children = jsxToString(glyphs[key])
  const file = generateComponent(name, children)
  fs.writeFile(`./src/components/${key}.ts`, file, err => {
    if (err) return console.error('ur a bad person :(', err)
  })
})

const glyphExports = glyphNames
  .map(g => `export { default as ${componentize(g)} } from './components/${g}'`)
  .join('\n')
const indexFile = `
export { default } from './icon'
export { glyphNames } from './glyphs'
${glyphExports}
`
fs.writeFile('./src/index.ts', indexFile, err => console.log(err))

console.log('Yay! You look cute today.')

// TODO
// Write SVG files to dist/icons/xyz.svg
