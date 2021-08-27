function internalSum(num) {
    return function(number) {
        console.log(`Число из внешней функции: ${num}, число из внутренней функции: ${number}`)
        return num + number;
    }
}

const result = internalSum(Math.round(Math.random()*100));

console.log(result(Math.round(Math.random()*100)));