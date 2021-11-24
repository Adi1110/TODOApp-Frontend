import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient 
  ) { }

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
    //console.log("Executed Hello World Bean Service");
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: any, todo: any){
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: any, todo: any){
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}
