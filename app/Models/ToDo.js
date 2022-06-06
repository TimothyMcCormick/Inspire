




export class ToDo{
  constructor(data){
    this.id = data.id
    this.description = data.description
    this.completed = data.completed || false
  }


  get Template(){
    return`
    
    <div class="text-light">
      <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.toDosController.completedToDo('${this.id}')">
      
      ${this.description}

      <span><i class=" selectable mdi mdi-trash-can" onclick="app.toDosController.deleteToDo('${this.id}')"></i></span>
      </label>
    </div>
    
    
    
      
    `
  }
}