import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMultislotComponent } from './content-multislot.component';

describe('ContentMultislotComponent', () => {
  let component: ContentMultislotComponent;
  let fixture: ComponentFixture<ContentMultislotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMultislotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMultislotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
