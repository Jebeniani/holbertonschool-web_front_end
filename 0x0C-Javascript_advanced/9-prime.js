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

console.time("Execution time of printing countPrimeNumbers");
const result = countPrimeNumbers();
console.timeEnd("Execution time of printing countPrimeNumbers");
console.log(`Execution time of printing countPrimeNumbers was ${result} milliseconds.`);
