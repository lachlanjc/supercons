# Supercons

Hack Club’s icons are a superset of [Spectrum](https://spectrum.chat)’s incredible collection (also published as [`spectrum-icons`](https://github.com/lachlanjc/spectrum-icons)).

[See them all](https://supercons.vercel.app)

## Usage

```sh
npm i supercons
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

## Development Setup

1. Clone & enter the repo.

```sh
$ git clone https://github.com/lachlanjc/supercons.git
$ cd icons
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
