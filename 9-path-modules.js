const path = require('path')

console.log(path.sep)

const filePth = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePth)

const base = path.basename(filePth)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolde', 'test.txt')
console.log(absolute)
