import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo
  id: number

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Default todo to prevent race condition in loading the todo from service
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.todo.id != -1){
      this.todoService.retrieveTodo(this.basicAuthenticationService.getAuthenticatedUser(), this.id).subscribe(
        response => {
          console.log(response);
          this.todo = response;
        }
      );
    }

  }

  saveTodo(){
    if (this.todo.id != -1){
      // update
      this.todoService.updateTodo(this.basicAuthenticationService.getAuthenticatedUser(), this.id, this.todo).subscribe(
        data => {
          console.log(data);
          // redirect to todos page
          this.router.navigate(['todos']);
        }
      );
    } else {
      // add
      this.todoService.addTodo(this.basicAuthenticationService.getAuthenticatedUser(), this.todo).subscribe(
        data => {
          console.log(data);
          // redirect to todos page
          this.router.navigate(['todos']);
        }
      );

    }

  }

}
