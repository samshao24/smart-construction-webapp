import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSetupComponent } from './financial-setup.component';

describe('FinancialSetupComponent', () => {
  let component: FinancialSetupComponent;
  let fixture: ComponentFixture<FinancialSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
