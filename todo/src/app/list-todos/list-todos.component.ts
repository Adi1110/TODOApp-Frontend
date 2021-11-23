import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{

  constructor(
    public id: number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message!: string;
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Learn to Code', false, new Date()),
  //   new Todo(3, 'Learn to Sing', false, new Date())
  // ]

  // todo = {
  //         id : 1,
  //         description: 'Learn to dance'
  // }

  constructor(
    public todoService : TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refereshTodos();
  }

  refereshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id}`);
    return this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`
        this.refereshTodos();
      }
    );
  }

  UpdateTodo(id: any){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
  }

  CreateTodo(){
    this.router.navigate(['todos',-1])
  }

}
