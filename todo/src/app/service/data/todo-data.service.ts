import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient 
  ) { }

  retrieveAllTodos(username: any){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    //console.log("Executed Hello World Bean Service");
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`${API_URL}/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: any, todo: any){
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: any, todo: any){
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }
}
