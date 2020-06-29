const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=9bb85f2909af2c3958af747b30364807&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''

    // register a handler
    // event name: data
    // callback: =>, fire when new data comes in
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on('end', () => {
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()