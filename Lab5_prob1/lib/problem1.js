do {
    var input = parseFloat(prompt("Please Enter a positive integer: "));
    if (Number.isInteger(input) && input >= 0) {
        if (input%1 == 0) {
            break
        }
    }
} while (true);


function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


function findPrimesLessThanInput(input) {
    const primes = [];

    for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}



const primesLessThanInput = findPrimesLessThanInput(input);

alert("For n = " + input + " prime numbers are " + primesLessThanInput)