import { ProxyState } from "../AppState.js"

const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 12000
})

class BgImagesService{
  async getImage() {
    const res = await sandboxApi.get('images')
    console.log('getImage', res.data);
    // document.getElementById('bg-image').innerHTML = res.data.images
  }

}


export const bgImagesService = new BgImagesService()