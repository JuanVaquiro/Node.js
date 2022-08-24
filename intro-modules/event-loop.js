console.log('first');

setTimeout( () => { 
    console.log('second');
}, 3000)

console.log('third');

const http = require('http')
const server2 = http.createServer((request, response) => { 
    if (request.url === '/') {
        response.write('welcome. welcome')
        return response.end()
    } else if (request.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            console.log(Math.random() * i);            
        }
        return response.end('about page')
    } else {
        response.end('not found')
    }
});

server2.listen(3000)
console.log('server corriendo 3000');