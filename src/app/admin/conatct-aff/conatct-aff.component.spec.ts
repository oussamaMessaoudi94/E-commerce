import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctAffComponent } from './conatct-aff.component';

describe('ConatctAffComponent', () => {
  let component: ConatctAffComponent;
  let fixture: ComponentFixture<ConatctAffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatctAffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatctAffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
