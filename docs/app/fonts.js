import localFont from 'next/font/local'

export const gtMaru = localFont({
  src: [
    {
      path: './GTMaruMedium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GTMaruBlack.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  familyName: 'GT Maru',
  variable: '--font-gt-maru',
  display: 'swap',
})
