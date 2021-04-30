import {Action, createReducer, on} from '@ngrx/store';
import * as StarWarsPeopleActions from '../action/starwarspeople.actions';
import {StarWarsPerson} from '../../../models/star-wars-person';

export const starwarsFeatureKey = 'starwars';

export interface StarWarsState {
  people: StarWarsPerson[];
}

export const initialState: StarWarsState = {
  people: []
};

export const starwarsReducer = createReducer(
  initialState,
  on(StarWarsPeopleActions.addPerson,
    (state: StarWarsState, {person}) =>
      ({...state,
        people: [...state.people, person]
      }))
);

export function reducer(state: StarWarsState | undefined, action: Action): any {
  return starwarsReducer(state, action);
}
