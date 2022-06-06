import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"


let sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 12000 
})


class WeatherService{
  async getFahrenheit() {
    const res = await sandboxApi.get('weather')
    console.log('get fahrenheit', res.data);
    let fahrenheit = ((res.data.main.temp - 273.15) * 1.8) + 32
    document.getElementById('temp').innerText = fahrenheit.toFixed().toString() + '°F'
  }
  async getCelsius() {
    const res = await sandboxApi.get('weather')
    console.log('get celsius', res.data);
    let celsius = res.data.main.temp - 273.15
    document.getElementById('temp').innerText = celsius.toFixed().toString() + '°C'
  }
  

}


export const weatherService = new WeatherService()