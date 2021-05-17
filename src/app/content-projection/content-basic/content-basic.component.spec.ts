import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBasicComponent } from './content-basic.component';

describe('ContentBasicComponent', () => {
  let component: ContentBasicComponent;
  let fixture: ComponentFixture<ContentBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
