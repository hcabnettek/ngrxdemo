import { createAction, props } from '@ngrx/store';
import {StarWarsPerson} from '../../../../types/sw';

export const addPerson = createAction(
  '[Star Wars] Add Person',
  (person: StarWarsPerson) => ({person})
);


export const loadStarWars = createAction(
  '[Star Wars] Load'
);

export const loadStarWarsSuccess = createAction(
  '[Star Wars] Load Success',
  props<{ people: StarWarsPerson[] }>()
);

export const loadStarWarsFailure = createAction(
  '[Star Wars] Load Fail',
  props<{ error: string }>()
);
