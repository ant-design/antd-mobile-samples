# antd-mobile with webpack

basic proj demo with webpack@2 and tree-shaking

### Install & Start

```shell
npm i  # npm i --save-dev webpack@2 webpack-dev-server@2 extract-text-webpack-plugin
npm start
```

open http://localhost:8000/

### Build

```sh
npm run build  # then see dist dir
# Note: you should remove `webpack-visualizer-plugin / webpack-bundle-analyzer` code in webpack.config.js file for production environment.
```

bundle analyzer tools: 
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) / 
[webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin) 
(Note: [just for dist bundle file analyse](https://github.com/th0r/webpack-bundle-analyzer/issues/86))
