function removeDuplicate(names) {
    let unique = [];
    /* for (let i = 0; i < names.length; i++) {
        let element = names[i];
        console.log(element);
    } */
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const names = ["abul", "babul", "cabul", "dabul", "ebul", "fabul", "babul", "ebul", "babul", "gabul", "abul", "habul", "dabul"];
const uniqueName = removeDuplicate(names);
console.log(uniqueName);

// duplicate number remove an array
function removeDuplicateNumbers(numbers) {
    let originalNum = [];
    for (const number of numbers) {
        if (originalNum.indexOf(number) == -1) {
            originalNum.push(number);
        }
    }
    return originalNum;
}
const numb = removeDuplicateNumbers([45, 21, 78, 98, 21, 45, 67, 78, 98, 100, 65, 100, 20, 12]);
console.log(numb);