import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
// import { StarwarsapiService } from '../star-wars-people/starwarsapi.service';
import { SWResult, People, StarWarsPerson} from '../../types/sw';

import { Store } from '@ngrx/store';
import { StarWarsState } from '../star-wars-people/store/reducer/people.reducer';
import { selectStarWars, getPeople, getError } from '../star-wars-people/store/selector/starwarspeople.selector';
import * as StarWarsActions from '../star-wars-people/store/action/starwarspeople.actions';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.css']
})
export class StarWarsListComponent  implements OnInit {
  pageTitle = 'Products';
  errorMessage$: Observable<string>;
  people$: Observable<StarWarsPerson[]>;

  constructor(private store: Store<StarWarsState>) { }

  ngOnInit(): void {
    this.people$ = this.store.select(getPeople);
    this.store.dispatch(StarWarsActions.loadStarWars());
  }

}
