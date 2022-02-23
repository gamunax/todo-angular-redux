import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;

  editing = false;

  // initialState: Todo[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.title, Validators.required);

    this.chkCompleted.valueChanges
      .subscribe(value => {
        this.store.dispatch(actions.Toggle({ id: this.todo.id }));
      });
  }

  edit(): void {
    this.editing = true;
    this.txtInput.setValue(this.todo.title);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  finishEdit(): void {
    this.editing = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.title) { return; }

    this.store.dispatch(
      actions.Edit({
        id: this.todo.id,
        title: this.txtInput.value
      })
    );
  }

  delete(): void {
    this.store.dispatch(actions.Delete({ id: this.todo.id }));
  }


}
