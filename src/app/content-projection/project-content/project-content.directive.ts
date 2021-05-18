import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appProjectContent]'
})
export class ProjectContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
