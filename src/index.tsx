import React from 'react'
import { glyphs, type GlyphName } from './glyphs'
export { glyphNames } from './glyphs'

interface Props {
  glyph?: GlyphName
  size?: number
}

function Icon<T extends React.ElementType = 'svg'>({
  as: Component = 'svg',
  size = 32,
  glyph = 'like',
  ...props
}: Props & React.ComponentPropsWithoutRef<T>) {
  return (
    <Component
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={glyph}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      width={size}
      height={size}
      children={glyphs[glyph as keyof typeof glyphs]}
      {...props}
    />
  )
}

export default Icon
