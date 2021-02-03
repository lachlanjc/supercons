# Supercons

A friendly set of open source React icons.

[→ **Preview & search the iconset**](https://supercons.vercel.app)

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
  <div style={{ color: 'cyan' }}>
    <Icon glyph="like" size={128} />
    <Icon glyph="leaders" size={32} />
  </div>
)
```

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

3. Build library.

```sh
yarn run prepare
```

4. Run docs locally.

```sh
yarn run dev
```

## To-do list

- [x] Drop PropTypes for TypeScript (thanks [@anirudhb](https://github.com/anirudhb)!)
- [ ] Try using Microbundle for build?
- [ ] Add more icons
- [ ] Forward refs (with proper TypeScript support)
- [ ] Allow tree-shaking by generating a component for each icon
