import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./data/second.txt', 'utf8'),
  readFile('./data/first.txt', 'utf8')
]).then(([text, secondText]) => {
  console.log('primer text:', text)
  console.log('segundo text:', secondText)
})
1