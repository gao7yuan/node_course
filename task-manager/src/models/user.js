const mongoose = require('mongoose')
const validator = require('validator')

// create model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7, // built-in validator!!!
        validate(value) {
            // if (value.length < 6) {
            //     throw new Error('Password must be at least 6 characters!')
            // }
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password should not contain string "password"!')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number!')
            }
        }
    }
})

module.exports = User