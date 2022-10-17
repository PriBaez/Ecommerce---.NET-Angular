import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRmProductComponent } from './confirm-rm-product.component';

describe('ConfirmRmProductComponent', () => {
  let component: ConfirmRmProductComponent;
  let fixture: ComponentFixture<ConfirmRmProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRmProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmRmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
