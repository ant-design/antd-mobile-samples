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

First we install antd-mobile, [react-app-rewired](https://github.com/timarney/react-app-rewired) and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

  ```bash
  $ yarn add antd-mobile
  $ yarn add babel-plugin-import react-app-rewired --dev
  ```

1. modify the scripts field in package.json.

    ```diff
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test --env=jsdom",
    +   "test": "react-app-rewired test --env=jsdom",
    }
    ```
2. Then create a `config-overrides.js` at root directory of your project for futher overriding and modify config-overrides.js:

    ```js
    const { injectBabelPlugin } = require('react-app-rewired');
    module.exports = function override(config, env) {
      config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
      return config;
    };
    ```

3. change importation like below:

    ```diff
    - import Button from 'antd-mobile/lib/button';
    + import { Button } from 'antd-mobile';
    ```
