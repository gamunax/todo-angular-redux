import { createAction, props } from '@ngrx/store';

export const Create = createAction(
  '[TODO] Create todo',
  props<{ title: string }>()
);