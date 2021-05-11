import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { SWResult, StarWarsPerson} from '../../types/sw';


@Injectable({
  providedIn: 'root'
})
export class StarwarsapiService {

  private url = 'https://swapi.dev/api/people/';
  $starwarspeople: Observable<StarWarsPerson[]> = this.http.get(this.url)
    .pipe(
      map(({results}: SWResult) => results ),
      tap(console.log),
      catchError(this.handleError)
    );

  constructor(private http: HttpClient) { }

  handleError(handleError: any): OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }

}


