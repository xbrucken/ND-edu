/*
 * @Author: xbrucken
 * @Date: 2021-02-04 22:38:07
 * @LastEditors: xbrucken
 * @LastEditTime: 2021-02-04 23:44:21
 * @FilePath: \react_staging\config-overrides.js
 */
//配置具体的修改规则
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
	}),
);