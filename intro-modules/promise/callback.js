import { readFile } from 'node:fs';

readFile('./data/strean.txt', 'utf8', (err, text) => {
  console.log('text con callback (1):', text)
})

console.log('🔄️ ejecutar cosas 🔄️')

readFile('./data/first.txt', 'utf8', (err, text) => {
  console.log('text con callback (2):', text)
})
