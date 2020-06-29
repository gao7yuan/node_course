const mongoose = require('mongoose')
// const validator = require('validator')

// use a different database name
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// create model
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7, // built-in validator!!!
//         validate(value) {
//             // if (value.length < 6) {
//             //     throw new Error('Password must be at least 6 characters!')
//             // }
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password should not contain string "password"!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   tovelo   ',
//     email: 'TOVELO@gmail.com    ',
//     password: 'dffddfdsjk'
//     // age: -26
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '   Homework     '
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })