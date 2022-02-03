function reverseString(text) {
    let reverse = "";
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
};
const gratings = "Hello, How are you?";
const reversed = reverseString(gratings);
console.log(reversed);