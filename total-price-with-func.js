// total price products of cart with function \\
function totalPriceCart(cart) {
    let totalPrice = 0;
    for (const product of cart) {
        const quantityProduct = product.price * product.quantity;
        totalPrice = totalPrice + quantityProduct;
    }
    return totalPrice;
}


const cart = [
    { name: "laptop", price: 43000, quantity: 1 },
    { name: "shirt", price: 500, quantity: 8 },
    { name: "watch", price: 3680, quantity: 3 },
    { name: "phone", price: 55000, quantity: 1 },
];
const priceTotal = totalPriceCart(cart);
console.log(priceTotal);