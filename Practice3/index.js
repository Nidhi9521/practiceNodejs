var path = require("path")

console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
console.log('resolve : ' + path.resolve('main.js'));
console.log('ext name : ' + path.extname('main.js'));
console.log('absolute : '+path.isAbsolute('/test/test1//2slashes/1slash/tab'))
console.log('absolute : '+path.isAbsolute('\test/test1//2slashes/1slash/tab'))
console.log('directory name : '+path.dirname('/test/test1/'))
console.log('format : '+path.format({root: "/ignored/root/",dir: "/home/user/personal",base: "details.txt",}));


console.log('path sep : '+'foo/bar/baz'.split(path.sep));
 console.log('path delimiter : '+path.delimiter);
// console.log('path posix : '+path.posix);
// console.log('path win32 : '+pa+th.win32);