import { createAction, props } from '@ngrx/store';

export type filtersValids = 'todos' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] set Filter',
  props<{ filter: filtersValids }>()
);

