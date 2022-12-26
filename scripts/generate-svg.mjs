import Icon, { glyphNames } from '../src'
import { render } from 'react-dom'
import fs from 'fs'

// create dist/svg directory if it doesn't exist
if (!fs.existsSync('./dist/svg')) {
  fs.mkdirSync('./dist/svg')
}

// render Icon component with every glyphName to SVG file
glyphNames.forEach(glyphName => {
  const svg = render(Icon({ glyph: glyphName }))

  // save to file
  fs.writeFileSync(`./dist/svg/${glyphName}.svg`, svg)
  console.log(glyphName)
})
