var pathUtil = require('path');
var parsed = pathUtil.parse('c:\Users\Jang\Desktop\nodeEx\path.js');

console.log(parsed);

console.log(parsed.base);
console.log(parsed.ext);