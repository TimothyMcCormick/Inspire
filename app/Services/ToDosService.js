import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";


let sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 12000 
})


class ToDosService{
  async deleteToDo(id) {
    const res = await sandboxApi.delete('/TMAC/todos/:todoId', '')
    console.log('delete todo', res.data);
    // ProxyState.toDos = ProxyState.toDos.filter(td => td.id != id)
  }
  async createToDo(formData) {
    const res = await sandboxApi.post('TMAC/todos', formData)
    console.log('creating to do', res.data);
    ProxyState.toDos = [...ProxyState.toDos, new ToDo(res.data.description)]
  }
  async getToDos(){
    const res = await sandboxApi.get('TMAC/todos')
    console.log('get to dos', res.data);
    ProxyState.toDos = res.data.map(t => new ToDo(t))
    console.log(ProxyState.toDos, res.data);
  }
  
}

export const toDosService = new ToDosService()