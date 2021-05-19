import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPortalOverviewExampleComponent } from './cdk-portal-overview-example.component';

describe('CdkPortalOverviewExampleComponent', () => {
  let component: CdkPortalOverviewExampleComponent;
  let fixture: ComponentFixture<CdkPortalOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPortalOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPortalOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
