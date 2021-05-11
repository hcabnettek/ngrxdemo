import { Component, OnInit, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import { IGraphQLWS, GraphQLWS, Client } from '../star-wars-people/ws.provider';
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
  channels: any;
  client: Client;

  constructor(private store: Store<StarWarsState>, @Inject(GraphQLWS) public graphqlWs: IGraphQLWS) { }

  ngOnInit(): void {
    this.people$ = this.store.select(getPeople);
    this.store.dispatch(StarWarsActions.loadStarWars());

    this.client = this.graphqlWs.createClient({
      url: 'ws://localhost:8443/graphql',
    });
    this.getChannels();
  }

  getChannels(): void {
    const result = new Promise((resolve, reject) => {
      // tslint:disable-next-line: no-shadowed-variable
      let result;
      this.client.subscribe({
        query: 'query GetChannels { channels { id, name } }',
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      });
    });

    result
          .then(({data: { channels }}) => this.channels = channels)
          .catch(e => console.log(e));
  }

}
