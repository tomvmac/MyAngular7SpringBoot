import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become Expert in Angular', false, new Date()),
  //   new Todo(3, 'Visit China', false, new Date())
  // ];



  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
        response => {
          console.log(response);
          this.todos = response;
        }
    );
  }



}
