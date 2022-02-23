import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { Create } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Vencer a Thanos'),
  new Todo('Comprar el traje de Ironman'),
  new Todo('Robar escudo del Capitán América')
];

const _create = createReducer(initialState,
  on(Create, (state, { title }) => [...state, new Todo(title)])
);

export function todoReducer(state, action) {
  return _create(state, action);
}