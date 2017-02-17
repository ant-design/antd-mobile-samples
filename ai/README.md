# antd-mobile with AI

> 利用 AI 探索更多应用！让时下热门的 AI 跟一个组件库发生联系~

### antd-mobile clue (just for fun)

利用 [tensorflow](https://www.tensorflow.org/) 训练了个能识别 antd-mobile 部分组件的模型，
打包进 Android / iOS APP。当遇到一些页面中不认识的组件时、你可以用它来扫描识别一下这个组件名是什么~

使用示例：

1. 在电脑 Chrome 上打开 [notice-bar](https://mobile.ant.design/kitchen-sink/notice-bar/) 组件
（也可以是search-bar/switch），再打开 Chrome dev tool 控制台，模拟手机显示效果。

2. 扫描下方二维码，安装我们的 "antd-mobile clue" (Android 6+ / iOS)

    - Android
    ![Android](https://zos.alipayobjects.com/rmsportal/TKSatxAYEEnDXzfDELVV.png)
    - iOS，由于限制严格，只能需要自己编译、参考 [tensorflow-ios_examples](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/ios_examples/) 文档说明，
    把此处新的[模型文件](https://github.com/warmhug/tensorflow-app/tree/master/model) 放入 data 目录，重命名即可。

3. 安装好后打开 app，扫描电脑 Chrome 里打开的 notice-bar 组件
    - notice bar 没显示在第一行？要靠近一点、组件左上角要显示到镜头里才行哦

4. 如果一切顺利，你会看到上方显示的识别出的组件名（很遗憾，这个扫不出来红包啦 :-D ）


### 其他

真机兼容性自动化测试服务: https://github.com/ant-design/ant-design-mobile/issues/614

