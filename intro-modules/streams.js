// const { writeFile } = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/strean.txt', 'new message'.repeat(100))
// }
// createBigFile()

const { createReadStream } = require('fs')
const stream = createReadStream('./data/strean.txt', 'utf-8')

stream.on('data', (chunk) => {
    console.log(chunk);
})