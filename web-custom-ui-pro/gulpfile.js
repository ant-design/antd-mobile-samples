const gulp = require('gulp');
const syncAnt = require('./sync-antd-mobile');
const fs = require('fs-extra');
const execSync = require('child_process').execSync;

// for .si.yml
gulp.task('site', (cb) => {
  syncAnt.init(() => {
    console.log('开始构建网站文件.....');
    execSync('npm run site', { stdio: 'inherit' });
    console.log('网站文件构建完成，手动拷贝 _site 目录到 site 分支');
    cb();
    process.exit();
  }, true);
});

gulp.task('start', (cb) => {
  console.log('====================  注意 =======================================');
  console.log('==== 请在 .gitignore 中加入 ant-design-mobile 和 components 目录 ====');
  console.log('==== antd-mobile 里与 biz-components 下的同名组件将被覆盖 ======');
  console.log('====================================================================');
  syncAnt.init(cb);
});
gulp.task('default', ['start']);

gulp.watch('biz-components/**/*', (event) => {
  console.log(`File ${event.path} was ${event.type} running tasks...`);
  // syncAnt.syncBiz();
  // 只同步改变的文件
  fs.copySync(event.path, event.path.replace('/biz-components/', '/components/'));
});
