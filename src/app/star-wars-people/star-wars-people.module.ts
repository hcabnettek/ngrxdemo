import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StarWarsEffects } from './store/effects/starwarspeople.effects';
import {starwarsFeatureKey, reducer} from './store/reducer/people.reducer';
import { StarWarsListComponent } from '../star-wars-list/star-wars-list.component';
import { StarwarsapiService } from './starwarsapi.service';

const starwarsRoutes: Routes = [
  { path: '', component: StarWarsListComponent }
];

@NgModule({
  declarations: [
    StarWarsListComponent
  ],
  providers: [
    StarwarsapiService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(starwarsRoutes),
    StoreModule.forFeature(starwarsFeatureKey, reducer),
    EffectsModule.forFeature([StarWarsEffects])
  ]
})
export class StarWarsPeopleModule { }
