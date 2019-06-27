const axios = require('axios');

const getClima = async(lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=73775130bf215246c9169009c95bf8f6&units=metric`)

    return response.data.main.temp;
}

module.exports = {
    getClima
}