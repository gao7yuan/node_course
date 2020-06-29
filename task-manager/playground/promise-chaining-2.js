require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ee3c9dc9bb2f0824843b51f').then(() => {
//     console.log('Task deleted!')
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ee4108d83895b865c2d0cdf').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})