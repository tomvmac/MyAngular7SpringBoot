import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
  message: string

  constructor(private todoService: TodoDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
        response => {
          console.log(response);
          this.todos = response;
        }
    );
  }

  deleteTodo(id){
    // console.log("delete todo", id);
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        // display to user
        this.message = `Delete of Todo Id ${id} was successful.`;
        // refresh todo list
        this.refreshTodos();
      },
      error => {
        console.log("Error: ", error);
      }
    );
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
