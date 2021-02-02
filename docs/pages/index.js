import React from 'react'
import Head from 'next/head'
import Icon, { glyphNames } from 'supercons'

// Adapted from https://pudding.cool/2020/12/judge-my-spotify/
const BG = () => (
  <div className="gradient-wrapper">
    <div className="gradient-overlay" />
    <div className="gradient">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1024"
        fill="none"
      >
        <circle cx={-164} cy={-136} r={677} fill="#622aff" />
        <circle cx={1658} cy={-104} r={677} fill="#e635ce" />
        <circle cx={588} cy={579} r={677} fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1={588}
            y1={-98}
            x2={588}
            y2={1256}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6bf" />
            <stop offset={1} stopColor="#2997ff" />
          </linearGradient>
        </defs>
        <circle cx={1349} cy={1189} r={677} fill="#f56300" />
      </svg>
    </div>
    <style jsx>{`
      .gradient-wrapper {
        position: fixed;
        pointer-events: none;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
      }

      .gradient-overlay {
        height: 100%;
        width: 100%;
        backdrop-filter: saturate(200%) blur(24px);
        background-color: rgba(255, 255, 255, 0.875);
        z-index: 10000;
      }

      @media (prefers-color-scheme: dark) {
        .gradient-overlay {
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: saturate(150%) blur(32px);
        }
      }

      .gradient {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      .gradient svg {
        height: 100%;
        width: 100%;
        z-index: -1;
        position: relative;
      }
    `}</style>
  </div>
)

const title = 'Supercons'
const description = 'React component'

const Docs = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="og:url" content="https://supercons.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </Head>
    <BG />
    <main>
      <header>
        <h1>Supercons</h1>
        <nav>
          <a href="https://github.com/lachlanjc/supercons">
            <Icon glyph="github" size={32} />
            GitHub
          </a>
          <a href="https://npmjs.com/package/supercons">
            <Icon glyph="sam" size={32} />
            npm
          </a>
        </nav>
      </header>
      <article>
        {glyphNames.sort().map(key => (
          <div key={key}>
            <Icon glyph={key} title={key} size={48} />
            <p children={key} />
          </div>
        ))}
      </article>
    </main>
    <style jsx global>{`
      body {
        font-family: ui-rounded, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #1e1e1e;
          color: #fff;
        }
        article svg {
          fill: #fff;
        }
        article svg:hover {
          fill: #34b4a7 !important;
        }
      }
    `}</style>
    <style jsx>{`
      main {
        font-size: 12px;
        text-align: center;
        width: 100%;
        padding: 1rem;
        margin: auto;
        z-index: 1;
        position: relative;
      }
      h1 {
        color: #e635ce;
        font-size: 3rem;
        font-weight: 900;
        font-style: italic;
        line-height: 1;
        margin: 0;
        padding: 1rem 0 2rem;
      }
      @supports (-webkit-text-fill-color: transparent) {
        h1 {
          -webkit-text-stroke: #e635ce;
          -webkit-text-stroke-width: 2px;
          -webkit-text-fill-color: #fff;
          text-shadow: 4px 4px 12px currentColor;
        }
        @media (min-width: 32em) {
          h1 {
            -webkit-text-stroke-width: 3px;
          }
        }
        @media (prefers-color-scheme: dark) {
          h1 {
            -webkit-text-fill-color: #1d1d1f;
          }
        }
      }
      header {
        padding: 1rem;
      }
      nav a {
        display: inline-flex;
        align-items: center;
        color: #ff9300;
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 1rem;
        transition: 0.125s ease-out;
        transition-property: color, transform;
        text-underline-position: under;
        text-decoration-style: wavy;
      }
      nav a:hover,
      nav a:focus {
        color: #ff5236;
        transform: rotate(-2deg) scale(1.25);
      }
      nav a:hover :global(svg),
      nav a:focus :global(svg) {
        transform: rotate(180deg);
      }
      nav a :global(svg) {
        margin-right: 0.5rem;
        transition: transform 0.5s linear;
      }
      article {
        margin-top: 1rem;
        display: grid;
        grid-row-gap: 0.5rem;
        grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
        justify-content: center;
      }
      p {
        color: #6e6e73;
        line-height: 1.25;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        word-break: break-word;
        word-wrap: wrap;
      }
      article :global(svg) {
        transition: 0.125s ease-out;
        transition-property: fill, transform;
        transform-origin: center bottom;
      }
      article :global(svg:hover) {
        fill: #ff9300;
        transform: scale(2);
      }
      @media (min-width: 32em) {
        h1 {
          font-size: 4rem;
        }
      }
      @media (min-width: 48em) {
        main {
          padding: 2rem 0;
          max-width: 80vw;
        }
        h1 {
          font-size: 5rem;
        }
        nav a {
          font-size: 1.5rem;
        }
        article {
          grid-column-gap: 1.25rem;
          grid-row-gap: 2rem;
          border-radius: 1rem;
          padding-top: 2rem;
        }
      }
      @media (prefers-color-scheme: dark) {
        article p {
          color: #a1a1a6;
        }
      }
    `}</style>
  </>
)

export default Docs
