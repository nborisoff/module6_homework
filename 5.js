const exponentiation = (x, n) => (x ^ 0) === x && x > 0 ? ((n ^ 0) === n && n > 0 ? console.log(Math.pow(x, n)) : console.log(`Число ${n} не натуральное`)) : console.log(`Число ${x} не натуральное`);
exponentiation(3, 2);