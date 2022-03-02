import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { ClearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: actions.filtersValids = 'todos';
  filters: actions.filtersValids[] = ['todos', 'completed', 'pending'];

  pendings = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .subscribe(state => {
        this.currentFilter = state?.filter;
        this.pendings = state?.todos?.filter(todo => !todo.completed)?.length || 0;
      });
  }

  changeFilter(filter: actions.filtersValids): void {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  clearCompleted(): void {
    this.store.dispatch(ClearCompleted());
  }

}
