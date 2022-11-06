import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [
    new Todo(
      'Test ToDo',
      'This is a test ToDo',
      '04/01/2023',
      'John Pierce'
    ),
    new Todo(
      'This is also a test ToDo',
      'This is a test description for a ToDo',
      '07/01/2023',
      'Tiffany Pierce'
    )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
