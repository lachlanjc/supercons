import React from 'react'
import { glyphs, type GlyphName } from './glyphs'
export { glyphNames } from './glyphs'

/**
 * Icon component renders an SVG with the given glyph.
 * Supports forwarding refs to the underlying SVG element.
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Name of the glyph to render */
  glyph?: GlyphName
  /** Width and height of the icon (in px) */
  size?: number
  /** Component or element type to render (defaults to 'svg') */
  as?: React.ElementType
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    { as: Component = 'svg', size = 32, glyph = 'like', ...props },
    ref
  ) => (
    <Component
      ref={ref}
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
)

export default Icon
