function printRange(start, end) {
    console.log(`from ${start} to ${end}`);
    let counter = start,
        intervalId = setInterval(function() {
            console.log(counter);

            if (counter == end) {
                clearInterval(intervalId);
            }
            counter++;
        }, 1000);
}

printRange(+prompt("Введите начало диапазона"), +prompt("Введите конец диапазона"));