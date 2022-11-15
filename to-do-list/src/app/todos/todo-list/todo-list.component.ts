import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  @Output() todoWasSelected = new EventEmitter<Todo>();

  todos: Todo[] = [
    new Todo('Test ToDo', 'This is a test ToDo', '04/01/2023', 'John P'),
    new Todo(
      'This is also a test ToDo',
      'This is a test description for a ToDo',
      '07/01/2023',
      'Tiffany P'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onTodoSelected(todo: Todo) {
    this.todoWasSelected.emit(todo);
  }

}
