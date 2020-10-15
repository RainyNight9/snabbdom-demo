// var snabbdom = require('snabbdom');

// 导入 snabbdom 报错
// import snabbdom from 'snabbdom'
// console.log(snabbdom)

// 正确的方法参考 https://github.com/snabbdom/snabbdom
// 官方也是最近更新了版本
import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes
import { thunk } from 'snabbdom/build/package/thunk'
console.log(init, h, thunk)