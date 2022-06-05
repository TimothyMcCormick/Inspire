import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { toDosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";




function _draw(){
  let toDos = ProxyState.toDos
  let template = ''
  toDos.forEach(td => template += td.Template)
  document.getElementById('todos').innerHTML = template
}

export class ToDosController{
  constructor(){
    console.log('loaded todos');
    ProxyState.on('toDos', _draw)
    this.getToDos()
  }

  async getToDos(){
    try {
      await toDosService.getToDos()
    } catch (error) {
      console.error();
      Pop.toast(error.message, 'error')
    }
  }

  async createToDo(){
    try {
      window.event.preventDefault()
      console.log('creating to do');
      let form = window.event.target
      let formData = {
        description: form.description.value
      }
      await toDosService.createToDo(formData)
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }

  

    
    
  
  async deleteToDo(id){
    try {
      await toDosService.deleteToDo(id)
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }
}