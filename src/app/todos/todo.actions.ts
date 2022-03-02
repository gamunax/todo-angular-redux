import { createAction, props } from '@ngrx/store';

export const Create = createAction(
  '[TODO] Create Todo',
  props<{ title: string }>()
);

export const Toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const Edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number, title: string }>()
);

export const Delete = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const ToggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completed: boolean }>()
);

export const ClearCompleted = createAction('[TODO] ClearCompleted Todo');