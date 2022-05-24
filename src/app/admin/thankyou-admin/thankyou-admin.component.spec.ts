import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouAdminComponent } from './thankyou-admin.component';

describe('ThankyouAdminComponent', () => {
  let component: ThankyouAdminComponent;
  let fixture: ComponentFixture<ThankyouAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
