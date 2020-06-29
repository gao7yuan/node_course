// Object property shorthand

const name = 'Yuan'
const userAge = 27

// const user = {
//     name: name,
//     age: userAge,
//     location: 'Seattle'
// }

const user = {
    name,
    age: userAge,
    location: 'Seattle'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red Book',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)
// transaction('order') => error, if second param no default
transaction('order')