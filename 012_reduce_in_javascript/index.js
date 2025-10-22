const cart = [
    { product: "apple", price: 50000},
    { product: "banana", price: 20000},
    { product: "orange", price: 4000},
    { product: "mango", price: 700},
]

const totalPrice = cart.reduce((total, item)=> total+item.price, 0);

// this means we'll iterate over each item and will add item.price everytime
// total is initialized by 0
console.log(totalPrice);