#!/usr/bin/env node

/* eslint-disable */
'use strict';

var prompt = require('prompt');
var fs = require('fs-extra');
var path = require('path');
var del = require('del');
var execSync = require('child_process').execSync;

var libName = 'antd_custom_ui';

// 枚举出 antd-mobile 里的所有可用组件
var components = [
  'accordion', 'action-sheet', 'activity-indicator', 'badge', 'button',
  'card', 'carousel', 'checkbox', 'date-picker', 'drawer', 'flex', 'grid',
  'icon', 'image-picker', 'input-item', 'list', 'list-view', 'menu', 'modal',
  'nav-bar', 'notice-bar', 'pagination', 'picker', 'picker-view', 'popover', 'popup', 'progress',
  'radio', 'refresh-control', 'result', 'search-bar', 'segmented-control', 'slider', 'stepper',
  'steps', 'swipe-action', 'switch', 'tab-bar', 'table', 'tabs', 'tag', 'textarea-item',
  'toast', 'white-space', 'wing-blank'
];
var antdC = path.join(__dirname, './ant-design-mobile/components'); // antd component dir
var bizC = path.join(__dirname, './biz-components'); // biz component dir
var destC = path.join(__dirname, './components'); // dest component dir
var bizCs = fs.readdirSync(bizC).filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

exports.init = function (cb, isDirect) {
  fs.emptyDirSync(destC); // clear components dir first

  if (!isDirect && !fs.existsSync(path.join(__dirname, './ant-design-mobile'))) {
    prompt.start();
    prompt.get({ message: '需要下载 ant-design-mobile ', name: 'down', default: 'yes' }, function (err, result) {
      if (!err && result.down === 'yes') {
        downAntd();
      }
    });
  } else {
    downAntd();
  }

  function downAntd() {
    if (!fs.existsSync(path.join(__dirname, './ant-design-mobile'))) {
      execSync('git clone git@github.com:ant-design/ant-design-mobile.git', { stdio: 'inherit' });
    }
    syncAntd();
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
  syncBiz();
  components.forEach(function (c) {
    if (bizCs.indexOf(c) > -1) {
      return;
    }
    var sourceDir = path.join(antdC, c);
    var destDir = path.join(destC, c);

    if (fs.existsSync(path.join(sourceDir, './index.web.tsx')) || fs.existsSync(path.join(sourceDir, './index.tsx'))) {
      fs.emptyDirSync(destDir);
      // create tsx
      fs.writeFileSync(path.join(destDir, '/index.web.tsx'), tsxContent(c));

      // copy examples\docs md file
      fs.copySync(path.join(sourceDir, '/index.en-US.md'), path.join(destDir, '/index.en-US.md'));
      fs.copySync(path.join(sourceDir, '/index.zh-CN.md'), path.join(destDir, '/index.zh-CN.md'));
      fs.copySync(path.join(sourceDir, '/demo'), path.join(destDir, '/demo'));
      // del react-native examples file
      del.sync([path.join(destDir, '/demo/*.tsx')]);
      // replace ` from 'antd-mobile'` with ` from 'antd_custom_ui'` in demo content
      var files = fs.walkSync(path.join(destDir, '/demo'));
      files.forEach(function (file) {
        var ct = fs.readFileSync(file).toString().replace(/\sfrom\s'antd-mobile'/g, " from '" + libName + "'");
        fs.writeFileSync(file, ct);
      });

      // copy date-picker locale dir
      if (c === 'date-picker') {
        var localeDir = path.join(destDir, './locale');
        fs.emptyDirSync(localeDir);
        fs.writeFileSync(path.join(localeDir, '/en_US.tsx'), `export { default } from 'antd-mobile/lib/date-picker/locale/en_US';\n`);
        fs.writeFileSync(path.join(localeDir, '/zh_CN.tsx'), `export { default } from 'antd-mobile/lib/date-picker/locale/zh_CN';\n`);
      }

      // create style
      var styleDir = path.join(destDir, './style');
      fs.emptyDirSync(styleDir);
      fs.writeFileSync(path.join(styleDir, '/index.less'), `@import '~antd-mobile/lib/${
        c === 'date-picker' ? 'picker' : c
      }/style/index.less';`);

      var indexStyle = path.join(sourceDir, './style/index.web.tsx');
      if (!fs.existsSync(indexStyle)) {
        indexStyle = path.join(sourceDir, './style/index.tsx');
      }
      fs.copySync(indexStyle, path.join(styleDir, '/index.web.tsx'));
      // Analyze and identify dependencies
      //       var ct = fs.readFileSync(indexStyle);
      //       if (ct.toString().split('\n').filter(function(i) { return i.trim() }).length > 2) {
      //         console.log(`
      // ========== Note: ${c} need the following component styles ====
      // ${ct}==============================================================
      //         `);
      //       }
    }
  });
}

function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}
function tsxContent(componentName) {
  return `import ${camelCase(componentName)} from 'antd-mobile/lib/${componentName}';
export default ${camelCase(componentName)};
`;
}


