import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";


let sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 12000 
})


class ToDosService{
  async getToDos(){
    const res = await sandboxApi.get('TMAC/todos')
    console.log('get to dos', res.data);
    ProxyState.toDos = res.data.map(t => new ToDo(t))
    console.log(ProxyState.toDos, res.data);
  }
  async createToDo(formData) {
    const res = await sandboxApi.post('TMAC/todos', formData)
    console.log('creating to do', res.data);
    ProxyState.toDos = [...ProxyState.toDos, new ToDo(res.data.description)]
  }
  async completedToDo(id) {
    let todo = ProxyState.toDos.find(td => td.id == id)
    // console.log(todo);
    todo.completed = !todo.completed
    const res = await sandboxApi.put(`/TMAC/todos/${todo.id}`, todo)
    ProxyState.toDos = ProxyState.toDos
    console.log(todo);
  }
  async deleteToDo(id) {
    const res = await sandboxApi.delete('/TMAC/todos/' + id)
    console.log('delete todo', res.data);
    ProxyState.toDos = ProxyState.toDos.filter(td => td.id != id)
  }
  
}

export const toDosService = new ToDosService()