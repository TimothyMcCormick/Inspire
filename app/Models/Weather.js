



export class Weather{
  constructor(data){
    this.fahrenheit = ((data.main.temp - 273.15) * 1.8) + 32
    this.celsius = data.main.temp - 273.15
  }


  
}