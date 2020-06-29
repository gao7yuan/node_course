const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('No location provided')
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        // if (address === undefined) {
        //     return console.log('No location provided')
        // }
        if (error) {
            return console.log(error)
        }
        // console.log('Error', error)
        // console.log('Data', data)
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
            // console.log('Error', error)
            // console.log('Data', data)
        })
    })
}



// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// const url = 'http://api.weatherstack.com/current?access_key=9bb85f2909af2c3958af747b30364807&query=37.8267,-122.4233&units=f'

// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather services!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const current = response.body.current
//         console.log(current.weather_descriptions[0])
//         console.log('It is currently ' + current.temperature + ' degrees out.')
//         console.log('It feels like ' + current.feelslike + ' degrees.')
//     }
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     // console.log(response.body.current)
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW5zb21uaWEtamVzc2ljYSIsImEiOiJja2F6dzQzbzAwMDV0MnJtcjRodnB6cTMyIn0.r3KfxfKwjKFUbWndL_lqIQ&limit=1'
// request({
//     url: geoUrl,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find coordinate')
//     } else {
//         const coordinate = response.body.features[0].center
//         console.log('Latitude: ' + coordinate[1] + ', Longitude: ' + coordinate[0])
//     }
// })

// console.log('Starting')

// // run the callback function after certain amount of time
// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping')