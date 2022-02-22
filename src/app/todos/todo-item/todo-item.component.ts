import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  // initialState: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(new Todo('hola'));
    // console.log([...this.initialState, new Todo('hola')]);
  }

}
