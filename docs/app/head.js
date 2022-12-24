const title = 'Supercons'
const description =
  'A friendly open source React iconset by Lachlan Campbell. Download supercons icons on npm.'
const image =
  'https://cloud-l7ijxkyvg.vercel.app/2021-02-02_21010z8cwfunpdn3jp59d7np4z6q5kdj.png'

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="og:url" content="https://supercons.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#e635ce" />
      <meta name="theme-color" content="#e635ce" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
