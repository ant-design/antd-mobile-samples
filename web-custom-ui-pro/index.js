/**
 * This is the entry file for `npm run dist`
 */

/**
 * build for `dist/antd-mobile.css`
 * Note: Include css
 */
// const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/(style\/)?index\.tsx?$/);
req.keys().forEach((mod) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    exports[camelCase(match[1])] = v;
  }
});

/**
 * build for `dist/antd-mobile.js`
 */
// module.exports = require('./components/index');

function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}
/* eslint no-console:0 */
if (typeof console !== 'undefined' && console.warn) {
  console.warn(`
Please use https://github.com/ant-design/babel-plugin-import to reduce app bundle size.`);
}
