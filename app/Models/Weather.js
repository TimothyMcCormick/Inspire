



export class Weather{
  constructor(data){
    this.fahrenheit = data.weather.main.temp - 273.15 * 1.8 + 32
    this.celsius = data.weather.main.temp - 273.15
  }

  get Template(){
    return`
    ${this.fahrenheit}
    `
  }
}