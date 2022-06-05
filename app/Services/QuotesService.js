import { ProxyState } from "../AppState.js"


let sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 12000 
})

class QuotesService{
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    console.log('getQuote', res.data);
    document.getElementById('quote').innerText = res.data.content
    document.getElementById('quote-author').innerText = res.data.author
  }

}


export const quotesService = new QuotesService()