




export class ToDo{
  constructor(data){
    this.description = data.description
  }


  get Template(){
    return`
    
      <ol class="d-flex justify-content-between">
        <li class="text-light"><span class=" p-2">${this.description}<i class="selectable mdi mdi-trash-can" onclick="app.toDosController.deleteToDo('')"><i class=" selectable mdi mdi-pencil"></i></i></span></li>
      </ol>
    `
  }
}