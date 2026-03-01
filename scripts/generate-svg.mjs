import React from 'react'
import Icon, { glyphNames } from '../dist/index.js'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'node:fs'

// create dist/svg directory if it doesn't exist
fs.mkdirSync('./dist/svg', { recursive: true })

// render Icon component with every glyphName to SVG file
glyphNames.forEach(glyphName => {
  const svg = renderToStaticMarkup(React.createElement(Icon, { glyph: glyphName }))

  // save to file
  fs.writeFileSync(`./dist/svg/${glyphName}.svg`, svg)
})

console.log(`Generated ${glyphNames.length} SVG files`)
