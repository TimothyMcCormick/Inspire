
import { ProxyState } from "../AppState.js";
import { bgImagesService } from "../Services/BgImagesService.js";
import { Pop } from "../Utils/Pop.js";




function _getTime(){
  let date = new Date();
  date.toTimeString()
  document.getElementById('current-time').innerText = date.toLocaleTimeString()
}




setInterval(_getTime, 1000)


export class BgImagesController{
  constructor(){
    console.log('bg-image loaded');
    this.getImage()
    
  }


  async getImage(){
    try {
      await bgImagesService.getImage()
    } catch (error) {
      console.error();
      Pop.toast(error.message, 'error')
    }
  }
}