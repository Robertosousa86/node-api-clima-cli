const { getcityID, getCityForecastById } = require('./utils/requests');

export default async function getForecast(cityName) {
    try {
        const cityId = await getcityID(cityName);
        const cityForecast = await getCityForecastById(cityId);

        console.log(`
            Clima em ${cityForecast.name}, ${cityForecast.state}
            Temperatura: ${cityForecast.temperature}˚
            Direção do vente: ${cityForecast.wind_direction}
            Velocidade do vento: ${cityForecast.wind_velocity} km/h
            Humidade: ${cityForecast.humidity}%
            Condição: ${cityForecast.condition}
            Pressão amosférica: ${cityForecast.pressure}
            Sensação térmica: ${cityForecast.sensation}˚
        `)
    } catch (error) {
        console.log(error.message)
    }
}