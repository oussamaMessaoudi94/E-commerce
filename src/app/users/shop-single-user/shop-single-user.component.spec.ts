import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSingleUserComponent } from './shop-single-user.component';

describe('ShopSingleUserComponent', () => {
  let component: ShopSingleUserComponent;
  let fixture: ComponentFixture<ShopSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSingleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
