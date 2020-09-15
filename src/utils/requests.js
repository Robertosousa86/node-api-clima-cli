const fetch = require('node-fetch');

const getApiToken = require('./apiToken');

const apiUrl = 'http://apiadvisor.climatempo.com.br/api/v1';

async function getcityID (cityName) {
    try {
        const appToken = await getApiToken();
        const responseCity = await fetch(`${apiUrl}/locle/city?name=${encodeURI(cityName)}&token=${appToken}`);
        const cityJson = await responseCity.json();

        if (!cityJson.length) {
            if (cityJson.detail)  {
                throw new Error(cityJson.detail);
            }
            throw new Error(`Ops! Cidade ${cityName} não encontrada.`);
        }

        return cityJson[0].id;
    } catch (error) {
        throw new Error(error);
    }
}

async function getCityForecastById(cityId) {
    try {
        const appToken = await getApiToken();
        const responseWeather = await fetch(`${apiUrl}/weather/locale/${cityId}/current?token=${appToken}`);
        const weatherjson = await responseWeather.json();

        return {
            name: weatherjson.name,
            state: weatherjson.state,
            country: weatherjson.country,
            ...weatherjson.data
        }
    } catch (error) {
        throw new Error(error);
    }
}

export {
    getcityID,
    getCityForecastById
}