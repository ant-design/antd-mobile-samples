## How to use `antd-mobile` with create-react-app

### Install and Initialization

We need to install the appropriate tools first, you may need install [yarn](https://github.com/yarnpkg/yarn/) too.

```bash
$ npm install -g yarn
$ npm install -g create-react-app
```

Then we create a new project named antm-demo.

```bash
$ create-react-app antm-demo
```

The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.

Then we go inside antm-demo and start it.

```bash
$ cd antm-demo
$ yarn start
```

Open browser at http://localhost:3000/, it renders a header saying "Welcome to React" on the page.

### Import antd-mobile

First we install antd-mobile and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

  ```bash
  # you must run `eject` first
  $ yarn run eject
  $ yarn add antd-mobile
  $ yarn add babel-plugin-import less-loader postcss-pxtorem svg-sprite-loader@0.3.1 --dev
  ```

1. Modify `config/webpack.config.dev.js`

    ```diff
    + const pxtorem = require('postcss-pxtorem');
    ...
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    ...
    rules: [
      ...
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        ...
        options: {
    +     plugins: [
    +       ['import', { libraryName: 'antd-mobile', style: true }],
    +     ],
          cacheDirectory: true,
        }
      },
      ...
      // It is generally necessary to use the Icon component, need to configure svg-sprite-loader
    + {
    +  test: /\.(svg)$/i,
    +  loader: 'svg-sprite-loader',
    +  include: [
    +    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
    +    path.resolve(__dirname, '../src/'),  // folder of svg files in your project
    +  ]
    + },
    + {
    +  test: /\.less$/,
    +  use: [
    +    require.resolve('style-loader'),
    +    require.resolve('css-loader'),
    +    {
    +      loader: require.resolve('postcss-loader'),
    +      options: {
    +        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    +        plugins: () => [
    +          autoprefixer({
    +            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    +          }),
    +          pxtorem({ rootValue: 100, propWhiteList: [] })
    +        ],
    +      },
    +    },
    +    {
    +      loader: require.resolve('less-loader'),
    +      options: {
    +        modifyVars: { "@primary-color": "#1DA57A" },
    +      },
    +    },
    +  ],
    + },
      {
        exclude: [
          ...
    +    /\.less$/,
    +    /\.svg$/,
          ...
        ],
        loader: require.resolve('file-loader'),
        ...
      },
    ]
    ```
    > Note, we only modified webpack.config.dev.js now, if you wish this config working on production environment, you need to update webpack.config.prod.js as well.

2. Entry html page Required settings:

  * Use HD program settings, see [antd-mobile@0.8-1.x HD setting](https://github.com/ant-design/ant-design-mobile/wiki/HD) for details.
  * Use [FastClick](https://github.com/ftlabs/fastclick), ref [#576](https://github.com/ant-design/ant-design-mobile/issues/576)
  * Use Promise fallback support (some Android phones do not support Promise), as follows:

    ```js
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
    ```