function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

console.time("Execution time of printing countPrimeNumbers 100 times");
for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        countPrimeNumbers();
    }, 0);
}
console.timeEnd("Execution time of printing countPrimeNumbers 100 times");
console.log(`Execution time of printing countPrimeNumbers 100 times was ${result} milliseconds.`);
