import { join, basename, dirname, parse, resolve } from 'path';
// console.log(path);

const filePath = join('/src', 'component', 'main.js')

console.log(filePath);
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(parse(filePath));
console.log(resolve);
