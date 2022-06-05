import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";




export class QuotesController{
  constructor(){
    console.log('quotes controller loaded');
    this.getQuote()
  }


  async getQuote(){
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error();
      Pop.toast(error.message, 'error')
    }
  }
}