// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient // to give access to functions to connect to db
// const ObjectID = mongodb.ObjectID

// destructure:
// const {MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID() // new keyword is optional
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

// const connectionURL = 'mongodb://127.0.0.1:27017' // local host server
// const databaseName = 'task-manager'

// connect() - asynchronous
// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log('Connected correctly!')

//     const db = client.db(databaseName) // return a database reference

    /* Create */

    // collection = table
    // insertOne() - asynchronous
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'vvv',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'fy',
    //         age: 28
    //     }, {
    //         name: 'maybe',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'grocery shopping',
    //         completed: false
    //     }, {
    //         description: 'homework',
    //         completed: true
    //     }, {
    //         description: 'cooking',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

    /* Read */

    // find no result is not an error, it returns null
    // findOne returns the first result
    // db.collection('users').findOne({name: 'vvv', age: 1}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(user)
    // })

    // search by id
    // should not use a string, because it is an ObjectID
    // db.collection('users').findOne({_id: "5ee2a0984843747abc1535e0"}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').findOne({_id: new ObjectID("5ee2a0984843747abc1535e0")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 26}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 26}).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ee29ed68387537a713b7eec")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch task')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to find tasks')
    //     }

    //     console.log(tasks)
    // })

    /* Update */

    // search document, then update
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ee29b752a283679f895bdae")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ee29b752a283679f895bdae")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ee29b752a283679f895bdae")
    // }, {
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // complete all tasks
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log('All tasks completed!', result.modifiedCount)
    // }).catch((error) => {
    //     console.log('Unable to complete tasks!', error)
    // })

    /* Delete */

    // db.collection('users').deleteMany({
    //     age: 26
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('tasks').deleteOne({
//         description: 'homework'
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    
// })

