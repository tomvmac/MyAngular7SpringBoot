import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})


export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username) {
    console.log("Calling retrieveAllTodos", username);
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }


  retrieveTodo(username, id) {
    console.log("Calling retrieveTodo", username);
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id){
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  // update
  updateTodo(username, id, todo) {
    console.log("Calling updateTodo", username);
    return this.httpClient.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  // add
  addTodo(username, todo) {
    console.log("Calling addTodo", username);
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }
}
