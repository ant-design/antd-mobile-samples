# Performance optimization tips

基础知识介绍，渲染性能：https://developers.google.com/web/fundamentals/performance/rendering/

## 项目优化

- `head` 标签内不要有「外链」资源，最大程度减少白屏时间
    - 替换`<link rel="stylesheet" href="xx.css">`为内联`<style>...</style>`
    - 所有 CSS 都必须内嵌，内嵌样式表最大为 50 KB. ref: https://www.ampproject.org/learn/how-amp-works/
    - `head`里，js 脚本要放到 css 之前，能避免阻塞 html 的解析。(因为 css 不会但 js 会阻塞 html 的解析)
- 仅运行 GPU 加速动画 (Only GPU-accelerated properties)
    - `transition` property : currently `opacity`, `transform` and `-vendorPrefix-transform`
    - `@keyframes {...}` : currently `opacity`, `transform` and `-vendorPrefix-transform`

## react 使用优化

> ref: https://hackernoon.com/react-at-60fps-4e36b8189a4c#.caaszjt87 / https://auth0.com/blog/optimizing-react/

- 不要把所有状态标记都放入 state, 这样可能会引起很多不必要的重复渲染
- 把复杂的数据转换或计算、放到更高层的组件里(即 wrapper component)
- 列表数据的每一项的`key`设置为 unique consistent id, 而不是数组序列位置（避免在删除/新增数据时引起的多余渲染对比损耗）

### `shouldComponentUpdate` / [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html)

- `shouldComponentUpdate`
    - Pitfalls: skips updates for the whole component subtree. Make sure all the children components are also "pure".
- `React.PureComponent` or `PureRenderMixin`
    - Just shallow compare. It won’t compare deeply nested objects (and comparing deeply nested objects is slow — this is why you should consider using immutable data structures)
    - Passing new instances of callback functions via props will also make this function always return true. Tip: use ESLint with [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md) to catch it.
    - Checks aren’t free. React.PureComponent can make your app slower if you use it everywhere.

In practice this means that in most cases it should only be used for:

1. Pure components that use simple props (no deep objects or arrays in props)
2. “leaf”-components or components located deep in the rendering tree.

