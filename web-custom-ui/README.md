# antd_custom_ui

antd_custom_ui 是 Ant Design Mobile 针对聚宝风格的 React 实现。
我们在 [antd-mobile](http://mobile.ant.design/) 的基础上，参照「聚宝 UI 设计规范」进行了风格定制。

## Install & Usage

[introduce](docs/react/introduce.md)

## 开发

```
$ npm install
$ npm start
```

访问 

- pc: 本地 http://127.0.0.1:8001 
- mobile: 本地 http://127.0.0.1:8002 

```
& npm run pub // 构建并发布到 npm
```

---

## 风格定制包开发

1. 拷贝本仓库。
2. 全局替换 `antd_custom_ui` 为你的包名，例如 `xxx-ui`，并修改相应文档的文案。
3. 按照上面的 `开发` 文档，跑起来。
4. 在`themes/default.less`文件里覆盖 antd-mobile 提供的相应 less 变量 (可以在此目录添加更多的 theme 文件)。
5. 仅覆盖变量无法满足需求，在`components/xx/index.web.tsx`文件里添加自己的代码逻辑。

组件的目录结构如下：

```
components/steps
├── demo
│   ├── basic.md         // 演示文档，可以有多个
│   └── another.md
├── index.md              // 组件的入口文档
├── index.web.tsx         // web 组件 JS 入口，通常依赖 antd-mobile 上的对应组件并直接暴露
└── style
    ├── index.less        // web 组件样式，通常依赖 antd-mobile 上的对应样式并进行复写
    └── index.web.tsx     // web 组件样式的入口
```

通常需要进行复写的源码有以下两个：

- `index.web.tsx` 使用 [typescript](http://typescriptlang.org/) 规范进行书写：

  ```jsx
  // 依赖后直接暴露
  import Button from 'antd-mobile/lib/steps/index.web';
  export default Button;
  ```

  ```jsx
  import React from 'react';
  import Icon from 'antd-mobile/lib/icon/index.web';

  export interface Props {
    prefixCls?: string;
  }
  export default class MyIcon extends React.Component<Props, any> {
    static defaultProps = {
      prefixCls: 'am-icon',
    };
    render() {
      return (
        <span className="extend-icon"><Icon {...this.props} /></span>
      )
    }
  }
  ```

- `style/index.less`

  ```css
  @import '~antd-mobile/lib/icon/style/index.less';

  .extend-icon {
    padding: 10px; // extend touch area
  }
  ```
