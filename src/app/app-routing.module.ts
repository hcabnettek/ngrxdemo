import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { ShellComponent } from './home/shell.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'starwars',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./star-wars-people/star-wars-people.module').then(m => m.StarWarsPeopleModule)
      },
      {
        path: 'projection',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./content-projection/content-projection.module').then(m => m.ContentProjectionModule)
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
