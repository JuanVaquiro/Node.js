const { user } = require('./module/myModule') // importando
const math = require('./math/calculate')

const { sum, mult } = math
console.log(sum(12, 2))
console.log(mult(5, 3))
        