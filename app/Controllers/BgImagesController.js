
import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { bgImagesService } from "../Services/BgImagesService.js";
import { Pop } from "../Utils/Pop.js";





export class BgImagesController{
  constructor(){
    console.log('bg-image loaded');
    this.getImage
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