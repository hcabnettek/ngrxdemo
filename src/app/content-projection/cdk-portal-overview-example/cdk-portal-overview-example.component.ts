import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-cdk-portal-overview-example',
  templateUrl: './cdk-portal-overview-example.component.html',
  styleUrls: ['./cdk-portal-overview-example.component.css']
})
export class CdkPortalOverviewExampleComponent implements AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;
  // tslint:disable-next-line: variable-name
  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
// tslint:disable-next-line: component-class-suffix
export class ComponentPortalExample { }
