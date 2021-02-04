import React from 'react'
import glyphs from './glyphs'

type Props<T> = {
  is?: Function | T | string
  glyph?: keyof typeof glyphs
  size?: number
}

function Icon<T extends React.ElementType = 'svg'>({
  as: Component = 'svg',
  size = 32,
  glyph = 'like',
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
      children={glyphs[glyph as keyof typeof glyphs]}
      {...props}
    />
  )
}

export default Icon
