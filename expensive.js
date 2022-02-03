// expensive phones \\
function expensivePhones(phones) {
    let expensivePhone = phones[0];
    for (const phone of phones) {
        if (expensivePhone.price < phone.price) {
            expensivePhone = phone;
        }
    }
    return expensivePhone;
};
const phones = [
    { name: "walton m2", price: 15000, camera: 8, storage: 8, },
    { name: "xiaomi m3", price: 12000, camera: 8, storage: 16, },
    { name: "oppo a2", price: 17000, camera: 8, storage: 32, },
    { name: "Samsung s5", price: 45000, camera: 10, storage: 32, },
    { name: "nokia n95", price: 8000, camera: 8, storage: 4, },
    { name: "htc h81", price: 25000, camera: 8, storage: 16, },
];
const expensive = expensivePhones(phones);
console.log(expensive);