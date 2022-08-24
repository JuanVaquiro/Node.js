const path = require('path');
// console.log(path);

const filePath = path.join('/src', 'component', 'main.js')

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve);
