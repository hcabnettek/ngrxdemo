import { createAction, props } from '@ngrx/store';
import {StarWarsPerson} from '../../../models/star-wars-person';

export const addPerson = createAction(
  '[Star Wars] Add Person',
  (person: StarWarsPerson) => ({person})
);
