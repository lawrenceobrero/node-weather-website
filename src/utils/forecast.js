const request = require('request')


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/1c3c8f57430d3a75fa38d5582c89438c/' + lat + ',' + lon
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connec to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
           // console.log(JSON.stringify(body.daily.data[0]))
            const currentTemp = body.currently.temperature
            const chanceOfRain = body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + currentTemp + ' degrees out. There is a ' + chanceOfRain + '% chance of rain. Temperature high is ' + body.daily.data[0].temperatureHigh + ' degrees.')
        }
    })
}

module.exports = forecast



//const url = 'https://api.darksky.net/forecast/1c3c8f57430d3a75fa38d5582c89438c/37.8267,-122.4233'


// request({ url: url, json:true }, (error, res) => {

//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (res.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const currentTemp = res.body.currently.temperature
//         const chanceOfRain = res.body.currently.precipProbability
//         console.log(res.body.daily.data[0].summary + ' It is currently ' + currentTemp + ' degrees out. There is a ' + chanceOfRain + '% chance of rain.')
//     }

//     // const data = JSON.parse(res.body)
//     // console.log(data)

//     //console.log(res.body.currently)


// } )

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })