function isPrimeNumber(number) {
    if (number > 1000) {
        alert(`Данные неверны. Число ${number} > 1000`);
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                alert(`Число ${number} не является простым`);
                return false;
            }
        }
        alert(`Число ${number} является простым`);
        return true;
    }

}
isPrimeNumber(Math.round(Math.random()*1500));