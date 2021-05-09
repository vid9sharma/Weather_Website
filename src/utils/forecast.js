const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7915f71922f76e4108fa8868ce8c5051&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. \nThe humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast