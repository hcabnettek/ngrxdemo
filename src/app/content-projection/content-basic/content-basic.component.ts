import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-basic',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
  styleUrls: ['./content-basic.component.scss']
})
export class ContentBasicComponent {

}
