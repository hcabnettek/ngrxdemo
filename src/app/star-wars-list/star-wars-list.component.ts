import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StarwarsapiService } from '../starwarsapi.service';
import { SWResult, People} from '../../types/sw';


@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.css']
})
export class StarWarsListComponent {

  people$ = this.sw.$starwarspeople;

  constructor(private sw: StarwarsapiService) { }

}
