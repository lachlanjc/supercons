'use client'
import { useRef, useState } from 'react'
import Icon, { glyphNames } from 'supercons'
import BG from '../components/bg'
import useFocusable from '../components/use-focusable'
import { useClipboard } from 'use-clipboard-copy'
import toast, { Toaster } from 'react-hot-toast'
import '../public/index.css'

const Docs = () => {
  const input = useRef(null)
  const [search, setSearch] = useState('')
  useFocusable(input)
  const clipboard = useClipboard()
  function copyToClipboard(text) {
    toast.dismiss()
    clipboard.copy(text)
    toast.success('Copied!', {
      style: {
        border: 0,
        padding: '1rem',
        color: '#6bf',
        fontWeight: 600,
        background: '#1d1d1f',
        boxShadow: '4px 4px 64px #e635ce',
        borderRadius: '20px',
      },
      icon: <Icon glyph="copy-check" size={24} />,
    })
  }

  return (
    <>
      <BG />
      <main>
        <header>
          <h1>Supercons</h1>
          <h2>A friendly, open source React iconset</h2>
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
          <input
            type="search"
            autoCapitalize={false}
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="Filter… / to focus"
            aria-label="Filter icons"
            ref={input}
          />
        </header>
        <article>
          {glyphNames
            .sort()
            .filter(n =>
              search !== '' ? n.includes(search.toLowerCase()) : true,
            )
            .map(key => (
              <div key={key} id={key}>
                <Icon
                  glyph={key}
                  title={key}
                  size={48}
                  onClick={() => copyToClipboard(key)}
                />
                <p children={key} />
              </div>
            ))}
        </article>
        <Toaster position="bottom-right" />
        <footer>
          Tap to copy an icon name.
          <br />
          Package, site, & most icons by{' '}
          <a href="https://lachlanjc.com">@lachlanjc</a>.
          <br />
          Credit to <a href="https://bryn.io">@superbryntendo</a> for initial
          group of icons.
        </footer>
      </main>
    </>
  )
}

export default Docs
