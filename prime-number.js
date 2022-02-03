// prime number
function primeNumber(number) {
    if (number < 2) {
        return "please input a number bigger than 1";
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return number + " " + "is not a prime number";
        }
    }
    return (number + " " + "is a prime number");
};
const myNumber = primeNumber(11);
console.log(myNumber);