import { ProxyState } from "../AppState.js"

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 12000
})

class BgImagesService{
  async getImage() {
    const res = await sandboxApi.get('images')
    console.log('getImage', res.data.largeImgUrl);
    document.body.style.backgroundImage = "url(" + res.data.largeImgUrl + ")"
    console.log(res.data);
    document.getElementById('img-author').innerText = res.data.author
  }

}


export const bgImagesService = new BgImagesService()