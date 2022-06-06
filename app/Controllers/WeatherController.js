import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";






export class WeatherController{
  constructor(){
    console.log('weather controller loaded');
    this.getFahrenheit()
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