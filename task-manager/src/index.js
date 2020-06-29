const express = require('express')
require('./db/mongoose') // just need to run mongoose and connect to database
const User = require('./models/user') // model
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// Automatically parse incoming JSON into an object
app.use(express.json())
// register router
app.use(userRouter)
app.use(taskRouter)

/* Create and Register Router */
// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from my other router')
// })
// app.use(router) // register router

/* Route Handler */

/* Configure POST users */
// path, callback

// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.post('/users', (req, res) => {
//     const user = new User(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((error) => {
//         res.status(400).send(error)
//         // res.send(error)
//     })
//     // console.log(req.body) // request is parsed into an object
//     // res.send('testing!')
// })

/* GET users */
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

/* GET user by id */
// app.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)
//         if (!user) {
//             res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id
//     // use findOne() or findById()
//     // mongoose converts string id to object id automatically
//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((error) => {
//         res.status(500).send()
//     })
//     // console.log(req.params)
// })

// app.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (isValidOperation) {
//         res.status(400).send({error: 'Invalid updates!'})
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
//         if (!user) {
//             res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if (!user) {
//             res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)
//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((error) => {
//         res.status(400).send(error)
//     })
// })

// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.get('/tasks', (req, res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id
//     try {
//         const task = await Task.findById(_id)
//         if (!task) {
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id
//     Task.findById(_id).then((task) => {
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })

// app.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//     if (!isValidOperation) {
//         res.status(400).send({error: 'Fields not allowed'})
//     }
//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
//         if (!task) {
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)
//         if (!task) {
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})