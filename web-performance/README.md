# antd-mobile with webpack

performance test proj

```sh
npm i
npm start # open http://localhost:8000/
# Build
npm run build
```

[performance optimization tips](./tips.md)

## Todos

- Some components use `React.PureComponent` for refactoring

## Test Case

### react 性能

- 网络请求时间
- 执行时间
- 进入页面入口组件的 constructor 函数时间
- 进入页面入口组件的 componentDidMount 函数时间

### 页面、组件性能

- 组件 render 执行次数
- 动画流畅度、页面滚动性能 (fps)
- reflow / repaint 情况

## 测试方法：

- 在 PC Chrome 上和 iOS Android 真机上
- 模拟弱网情况 3G/4G



