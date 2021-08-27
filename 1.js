function checkParity() {
    let result;

    result = +prompt("Введите число");

    if (isNaN(result) || typeof(result) != "number") {
        alert("Упс, кажется, вы ошиблись");
    } else if (typeof(result) == "number") {
        if (result % 2 == 0) {
            console.log("Число четное");
        } else {
            console.log("Число нечетное");
        }
    } else {
        alert("Упс, кажется, вы ошиблись");
    }
}
checkParity();