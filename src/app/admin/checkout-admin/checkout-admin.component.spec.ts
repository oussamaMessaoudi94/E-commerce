import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAdminComponent } from './checkout-admin.component';

describe('CheckoutAdminComponent', () => {
  let component: CheckoutAdminComponent;
  let fixture: ComponentFixture<CheckoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
