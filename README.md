# Supercons

A friendly set of open source React icons.

[→ **Preview & search the iconset**][docs]

[docs]: https://supercons.vercel.app

Massive credit to [@superbryntendo](https://github.com/superbryntendo) for the original set of icons & aesthetic inspiration.

Predecessor projects: [spectrum-icons](https://github.com/lachlanjc/spectrum-icons), [@hackclub/icons](https://github.com/hackclub/icons)

![Banner with fun styling of Supercons](https://cloud-l7ijxkyvg.vercel.app/2021-02-02_21010z8cwfunpdn3jp59d7np4z6q5kdj.png)

## Usage

```sh
yarn add supercons
# npm i supercons
```

```js
import React from 'react'
import Icon from 'supercons'

export default () => (
  <div style={{ color: 'magenta' }}>
    <Icon glyph="like" size={128} />
    <Icon glyph="cloud" size={32} />
  </div>
)
```

Built with/supports TypeScript.

### Props

| Prop    | Type             | Default | Details               |
| ------- | ---------------- | ------- | --------------------- |
| `glyph` | String, required | `like`  | See [docs]            |
| `size`  | Number or string | `32`    | Sets width & height   |
| `as`    | React component  | `svg`   | Must render `svg` tag |

You can also pass any other props. Remember to make your icons accessible with `aria-label` or `title`, use `aria-hidden` if they’re purely decorative, etc.

## Development setup

1. Clone & enter the repo.

```sh
$ git clone https://github.com/lachlanjc/supercons.git
$ cd supercons
```

2. Install dependencies.

```sh
$ yarn
```

4. Run docs locally.

```sh
yarn run dev
```

4. After making changes to icons, build the library.

```sh
yarn run prepare
```

## To-do list

- [x] Drop PropTypes for TypeScript (thanks [@anirudhb](https://github.com/anirudhb)!)
- [x] Use [Microbundle](https://github.com/developit/microbundle) for build
- [ ] Allow tree-shaking by programatically generating a component for each icon
- [ ] Forward refs (with proper TypeScript support)
- [x] Add more icons
