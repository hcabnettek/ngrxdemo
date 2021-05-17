import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentMultislotComponent } from './content-multislot/content-multislot.component';
import { ContentBasicComponent } from './content-basic/content-basic.component';
import { ContentTemplateComponent } from './content-template/content-template.component';
import { ProjectContentDirective } from './project-content/project-content.directive';

const contentProjectionRoutes: Routes = [
  { path: '', component: ContentBasicComponent },
  { path: 'multi', component: ContentMultislotComponent },
  { path: 'template', component: ContentTemplateComponent }
];

@NgModule({
  declarations: [
    ContentMultislotComponent,
    ContentBasicComponent,
    ContentTemplateComponent,
    ProjectContentDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contentProjectionRoutes)
  ]
})
export class ContentProjectionModule { }
