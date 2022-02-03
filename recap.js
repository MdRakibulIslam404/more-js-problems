function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
};
const myLarge = largestElement([34, 11, 21, 33, 1, 2, 78, 45, 65, 21]);
console.log(myLarge);


function smallestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
};
const mySmall = smallestElement([34, 11, 21, 33, 1, 2, 78, 45, 65, 21]);
console.log(mySmall);