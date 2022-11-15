import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Todo;
  @Output() todoSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.todoSelected.emit();
  }

}
