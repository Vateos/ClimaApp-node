const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`htpps://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=8bd1842155b9c2cb7d06359f106ca8f7&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}