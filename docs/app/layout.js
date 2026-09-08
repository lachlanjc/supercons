import { gtMaru } from './fonts'
import '../public/index.css'

function Layout({ children }) {
  return (
    <html lang="en-US" className={gtMaru.variable}>
      <head />
      <body className={gtMaru.className}>{children}</body>
    </html>
  )
}

export default Layout
