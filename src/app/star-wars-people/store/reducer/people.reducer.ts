import {Action, createReducer, on} from '@ngrx/store';
import * as StarWarsPeopleActions from '../action/starwarspeople.actions';
import {StarWarsPerson} from '../../../../types/sw';

export const starwarsFeatureKey = 'starwars';

export interface StarWarsState {
  people: StarWarsPerson[];
  error?: string;
}

export const initialState: StarWarsState = {
  people: [],
  error: ''
};

export const starwarsReducer = createReducer(
  initialState,
  on(StarWarsPeopleActions.addPerson,
    (state: StarWarsState, { person }) =>
      ({...state,
        people: [...state.people, person]
      })
  ),
  on(StarWarsPeopleActions.loadStarWarsSuccess,
    (state: StarWarsState, { people }) =>
      ({...state,
        people,
        error: ''
      })
  ),
  on(StarWarsPeopleActions.loadStarWarsFailure,
    (state, action): StarWarsState =>
      ({...state,
        people: [],
        error: action.error
      })
  ),

);

export function reducer(state: StarWarsState | undefined, action: Action): any {
  return starwarsReducer(state, action);
}
