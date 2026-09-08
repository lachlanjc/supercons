import { gtMaru } from './fonts'
import '../public/index.css'

const title = 'Supercons'
const description =
  'A friendly open source React iconset by Lachlan Campbell. Download supercons icons on npm.'

export const metadata = {
  title,
  description,
  metadataBase: new URL('https://supercons.vercel.app'),
  openGraph: {
    title,
    description,
    url: 'https://supercons.vercel.app',
    type: 'website',
    siteName: title,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#e635ce',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e635ce',
}

function Layout({ children }) {
  return (
    <html lang="en-US" className={gtMaru.variable}>
      <body className={gtMaru.className}>{children}</body>
    </html>
  )
}

export default Layout
