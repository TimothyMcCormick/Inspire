import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _getTime(){
  let date = new Date();
  date.toTimeString()
  document.getElementById('current-time').innerText = date.toLocaleTimeString()
}


setInterval(_getTime, 1000)


export class WeatherController{
  constructor(){
    console.log('weather controller loaded');
    this.getFahrenheit()
    // _drawFahrenheit()
  }


  async getFahrenheit(){
    try {
      await weatherService.getFahrenheit()
    } catch (error) {
      console.error();
      Pop.toast(error.message, 'error')
    }
  }
  async getCelsius(){
    try {
      await weatherService.getCelsius()
    } catch (error) {
      console.error();
      Pop.toast(error.message, 'error')
    }
  }
}