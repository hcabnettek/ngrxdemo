import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { StarwarsapiService } from '../../starwarsapi.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StarWarsAction from '../action/starwarspeople.actions';
import { StarWarsPerson } from 'src/types/sw';



@Injectable()
export class StarWarsEffects {

  constructor(private actions$: Actions, private swService: StarwarsapiService) { }

  loadPeople$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(StarWarsAction.loadStarWars),
        mergeMap(() => this.swService.$starwarspeople
          .pipe(
            map((people: StarWarsPerson[]) => StarWarsAction.loadStarWarsSuccess({ people })),
            catchError(error => of(StarWarsAction.loadStarWarsFailure({ error })))
          )
        )
      );
  });
}
