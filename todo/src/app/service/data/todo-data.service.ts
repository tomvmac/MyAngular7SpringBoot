import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})


export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username) {
    console.log("Calling retrieveAllTodos", username);
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }


  retrieveTodo(username, id) {
    console.log("Calling retrieveTodo", username);
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id){
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  // update
  updateTodo(username, id, todo) {
    console.log("Calling updateTodo", username);
    return this.httpClient.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

}
