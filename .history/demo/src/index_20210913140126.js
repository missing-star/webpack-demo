/**
 * 入口文件
 * 
 * dev cmd: webpack ./src/index.js -o ./build/built.js --mode=development
 */

import user from './data.json'

console.log(user)

function add (x, y) {
  return x + y
}

console.log(add(1, 2))