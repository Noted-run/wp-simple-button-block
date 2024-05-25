<div align="center">

# Simple Button Block

WordPress Hand-made Plugin.

---

![](https://avatars.githubusercontent.com/u/84720167?s=200&v=4)
Powered by Noted.

</div>

## 🛠️ Develop

### 🏗️ Env

- [Docker](https://www.docker.com/ja-jp/products/docker-desktop/): 25.0.2
- [node.js](https://nodejs.org/en/download/package-manager): v20.11.0
  - [npm](https://www.npmjs.com/): v10.3.0

### 📟 Cli

```bash
# dev boot (on hotreload): http://localhost:8888/wp-admin/plugins.php
npm run dev

# build (generate zip)
npm run build
```

### 🧭 Flow

1. install plugins on WordPress
   1. [Gutenberg](https://ja.wordpress.org/plugins/gutenberg/)
1. enable plugins
   1.Gutenberg
   1.simple-button-block
1. create new article
1. `/` or + button click to use block
