#!/usr/bin/env node

/* eslint-disable */

/**
 *  同步 antd-mobile 组件和 demo
 */

'use strict';

var prompt = require('prompt');
var fs = require('fs-extra');
var path = require('path');
var del = require('del');
const pkg = require('./package.json');
var execSync = require('child_process').execSync;

var libName = 'antd_mobile_custom_ui_exa';

// dest components 脚本构建出的 最终 组件 目录
var destC = path.join(__dirname, './components');

// biz components 业务组件目录 (可以和 antd-mobile 里组件同名)
var bizC = path.join(__dirname, './biz-components');

var bizCs = fs.readdirSync(bizC).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

function camelCase(params) {
  return params.split('-').map(item => item.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())).join('');
}

exports.init = function (cb, isDirect) {
  // 首先清空 components 目录
  fs.emptyDirSync(destC);
  // 如果没有下载 antd-mobile 仓库源码，则自动进行下载
  var no_antd_mobile = !fs.existsSync(path.join(__dirname, './ant-design-mobile'));

  if (!isDirect && no_antd_mobile) {
    prompt.start();
    prompt.get(
      { message: '需要下载 ant-design-mobile ', name: 'down', default: 'yes' },
      function (err, result) {
        if (!err && result.down === 'yes') {
          downAntd();
        }
      }
    );
  } else {
    downAntd();
  }

  function downAntd() {
    if (no_antd_mobile) {
      execSync('git clone git@github.com:ant-design/ant-design-mobile.git', { stdio: 'inherit' });
    } else {
      // 当前不做自动更新，用户自己手动更新文档，否则与 pkg.antd-mobile 版本不匹配 from @warmhug
      // execSync('cd ant-design-mobile && git reset --hard && git pull');
    }
    // 先拷贝 业务组件 到 components 目录
    syncBiz();
    // 再拷贝 antd-mobile 仓库里的组件 到 components 目录
    syncAntd();
    // 创建混合的 components/index.tsx 入口文件
    mergeEntry();
    // 再拷贝 antd-mobile util 文件到 components 目录
    syncUtil();
    cb();
    console.log('==== 同步完成。请在终端打开新标签、并运行 npm start ======');
  }
}

exports.syncBiz = syncBiz;

function syncBiz() {
  bizCs.forEach(function (bc) {
    fs.copySync(path.join(bizC, './' + bc), path.join(destC, './' + bc));
  });
}

function syncAntd() {
  // 先删除 ./ant-design-mobile/.babelrc 文件，解决 "react-native" presets 报错问题？
  del.sync([path.join(__dirname, './ant-design-mobile/.babelrc')]);

  // 枚举出 antd-mobile 里的所有可用组件，并同步修改到 components 目录
  [
    // the style of `icon,button,picker,picker-view,list,flex` is dependent by other components.
    'icon', 'button', 'picker', 'picker-view', 'list', 'flex',
    // has locale dir
    'calendar', 'date-picker', 'date-picker-view', 'input-item', 'pagination',
    'action-sheet', 'checkbox', 'accordion', 'activity-indicator', 'badge', 'card', 'carousel',
    'drawer', 'grid', 'image-picker', 'list-view', 'menu', 'modal',
    'nav-bar', 'notice-bar', 'popover', 'popup', 'progress',
    'radio', 'refresh-control', 'result', 'search-bar', 'segmented-control', 'slider', 'stepper',
    'steps', 'swipe-action', 'switch', 'tab-bar', 'table', 'tabs', 'tag', 'textarea-item',
    'toast', 'white-space', 'wing-blank'
  ]
  .forEach(function (cName) {
    // 忽略掉 业务组件目录 里的同名组件
    // 比如： biz-components 有 button 目录，则意味着您要【自己完全重写实现】button 组件逻辑
    if (bizCs.indexOf(cName) > -1) {
      return;
    }

    var sourceDir = path.join(__dirname, './ant-design-mobile/components', cName);
    var destDir = path.join(destC, cName);

    if (fs.existsSync(path.join(sourceDir, './index.tsx'))) {
      // 先 清空或创建 相应 cName 目录
      fs.emptyDirSync(destDir);

      // 创建 相应 cName 目录下的 index.tsx 文件
      fs.writeFileSync(
        path.join(destDir, '/index.tsx'),
        `import ${camelCase(cName)} from 'antd-mobile/lib/${cName}';\n` +
        `export default ${camelCase(cName)};\n`
      );

      // 创建 相应 cName 目录下的 examples & docs md 文件 (只是从 antd 拷贝过来)
      fs.copySync(path.join(sourceDir, '/index.en-US.md'), path.join(destDir, '/index.en-US.md'));
      fs.copySync(path.join(sourceDir, '/index.zh-CN.md'), path.join(destDir, '/index.zh-CN.md'));
      fs.copySync(path.join(sourceDir, '/demo'), path.join(destDir, '/demo'));

      // 删除 用于 react-native 的 demo 文件
      del.sync([path.join(destDir, '/demo/*.tsx')]);

      // 改变 demo 文件中的 `antd-mobile` 组件库名、为 新的 libName
      fs.walkSync(path.join(destDir, '/demo')).forEach(function (file) {
        fs.writeFileSync(file, fs.readFileSync(file).toString()
          .replace(/\sfrom\s'antd-mobile'/g, ` from '${libName}'`));
      });

      // 同步 带有 locale 目录的组件
      if (fs.existsSync(path.join(sourceDir, './locale'))) {
        var localeDir = path.join(destDir, './locale');
        // 在 dest 目录里 清空或创建 locale 目录
        fs.emptyDirSync(localeDir);
        // 暂时 先创建 en 和 zh 两个文件  todos
        fs.writeFileSync(path.join(localeDir, '/en_US.tsx'),
          `export { default } from 'antd-mobile/lib/${cName}/locale/en_US';\n`);
        fs.writeFileSync(path.join(localeDir, '/zh_CN.tsx'),
          `export { default } from 'antd-mobile/lib/${cName}/locale/zh_CN';\n`);
      }

      // 创建 相应 cName 目录下的 style 样式文件
      var styleDir = path.join(destDir, './style');
      fs.emptyDirSync(styleDir);
      if (fs.existsSync(path.join(sourceDir, './style/index.less'))) {
        fs.writeFileSync(path.join(styleDir, './index.less'),
          `@import '~antd-mobile/lib/${cName}/style/index.less';`);
      }
      var indexStyle = path.join(sourceDir, './style/index.tsx');
      fs.copySync(indexStyle, path.join(styleDir, '/index.tsx'));

      // 一个组件可能在 style/index.tsx 里标明依赖另一个组件样式，此时需要确保 被依赖的组件 存在
      //       var ct = fs.readFileSync(indexStyle);
      //       if (ct.toString().split('\n').filter(function(i) { return i.trim() }).length > 2) {
      //         console.log(`
      // ========== Note: ${cName} need the following component styles ====
      // ${ct}==============================================================
      //         `);
      //       }
    }
  });
}

function syncUtil(params) {
  const utils = fs.readdirSync('./ant-design-mobile/components/_util');
  if (!fs.existsSync('./components/_util')) {
    fs.mkdirSync('./components/_util');
  }
  utils.forEach(item => {
    let content;
    if (item === 'upgradeTip.tsx') {
      content = '';
    } else {
      content = fs.readFileSync(`./ant-design-mobile/components/_util/${item}`);
    }
    fs.writeFileSync(`./components/_util/${item}`, content);
  })
}

function mergeEntry() {
  const files = fs.readdirSync('./components')
  const exportStatements = files.map(foldername => {
    return `export { default as ImagePicker } from './${foldername}/index';`
  })
  const componentsStatements = files.map(item => {
    const componentName = camelCase(item);
    return `export { default as ${componentName} } from './${item}/index';`
  });
  fs.writeFileSync('./components/index.tsx', componentsStatements.join('\n'))
}

