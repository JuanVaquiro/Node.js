const { promisify } = require('util')
const { readFile } = require("fs");

const readFilePromise = promisify(readFile)

const readPromisify = async () => { 
    try {
        const result = await readFilePromise("../data/first.txt", 'utf-8')
        console.log(result);
    } catch (error) {   
        console.log(error);
    }
}


readPromisify()