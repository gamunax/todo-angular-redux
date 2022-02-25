import { createReducer, on } from '@ngrx/store';
import { filtersValids, setFilter } from './filter.actions';

export const initialState: filtersValids = 'todos' as filtersValids;

// tslint:disable-next-line: variable-name
const _filterReducer = createReducer(initialState,
  on(setFilter, (state, { filter }) => filter)
);

// tslint:disable-next-line: typedef
export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
