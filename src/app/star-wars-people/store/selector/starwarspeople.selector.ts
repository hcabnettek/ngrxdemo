import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromStarWars from '../reducer/people.reducer';

export const selectStarWarsState = createFeatureSelector<fromStarWars.StarWarsState>(
  fromStarWars.starwarsFeatureKey,
);

export const selectStarWars = createSelector(
  selectStarWarsState,
  (state: fromStarWars.StarWarsState) => state.people
);
