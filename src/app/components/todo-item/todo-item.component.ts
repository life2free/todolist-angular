import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo: Todo) {
    this.todo.completed = !this.todo.completed;
  }

  onDelete(todo: Todo) {}
}
