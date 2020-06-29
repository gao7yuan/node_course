const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book) // convert JSON object to string
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON) // convert string to JSON object
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// 1. load data in and parse JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// 2. update data info
data.name = 'Yuan'
data.age = 31

// 3. convert to string and write to file
const newDataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newDataJSON)