import React from 'react'
import glyphs from './glyphs'

const Icon = ({
  glyph = 'like',
  as: Component = 'svg',
  size = 32,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  glyph?: keyof typeof glyphs
  as?: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>> | string
  size?: number | string
}) => (
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
    children={glyphs[glyph as keyof typeof glyphs]}
    {...props}
  />
)

export default Icon
