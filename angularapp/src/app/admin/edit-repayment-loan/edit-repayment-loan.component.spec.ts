import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepaymentLoanComponent } from './edit-repayment-loan.component';

describe('EditRepaymentLoanComponent', () => {
  let component: EditRepaymentLoanComponent;
  let fixture: ComponentFixture<EditRepaymentLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRepaymentLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepaymentLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
