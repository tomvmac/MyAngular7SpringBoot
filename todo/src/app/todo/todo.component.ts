import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

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
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Default todo to prevent race condition in loading the todo from service
    this.todo = new Todo(1, '', false, new Date());

    this.todoService.retrieveTodo('in28Minutes', this.id).subscribe(
      response => {
        console.log(response);
        this.todo = response;
      }
    )

  }

  saveTodo(){
    this.todoService.updateTodo('in28Minutes', this.id, this.todo).subscribe(
      data => {
        console.log(data);
      }
    );
    // redirect to todos page
    this.router.navigate(['todos']);
  }

}