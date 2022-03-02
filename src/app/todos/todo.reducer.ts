import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { Create, Delete, Edit, Toggle, ToggleAll, ClearCompleted } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Vencer a Thanos'),
  new Todo('Comprar el traje de Ironman'),
  new Todo('Robar escudo del Capitán América')
];

// tslint:disable-next-line: variable-name
const _create = createReducer(initialState,
  on(Create, (state, { title }) => [...state, new Todo(title)]),

  on(Delete, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(Toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  }),

  on(Edit, (state, { id, title }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        };
      }
      return todo;
    });
  }),

  on(ToggleAll, (state, { completed }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed
      };
    });
  }),

  on(ClearCompleted, (state) => state?.filter(todo => !todo.completed))
);

// tslint:disable-next-line: typedef
export function todoReducer(state, action) {
  return _create(state, action);
}
