// triangle area
function triangleArea(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;  /// s = Semi-perimeter. It is equal to the sum of all three sides of the triangle divided by 2.
    const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    return area;
};
const triArea = triangleArea(8, 9, 12);
console.log(triArea);