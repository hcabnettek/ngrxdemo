import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {starwarsFeatureKey, reducer} from './store/reducer/people.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(starwarsFeatureKey, reducer),
  ]
})
export class StarWarsPeopleModule { }
