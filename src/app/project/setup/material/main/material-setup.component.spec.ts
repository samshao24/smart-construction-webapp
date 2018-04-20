import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSetupComponent } from './material-setup.component';

describe('MaterialSetupComponent', () => {
  let component: MaterialSetupComponent;
  let fixture: ComponentFixture<MaterialSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
