import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListeComponent } from './request-liste.component';

describe('RequestListeComponent', () => {
  let component: RequestListeComponent;
  let fixture: ComponentFixture<RequestListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
