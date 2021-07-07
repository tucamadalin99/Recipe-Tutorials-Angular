import { createComponent } from '@angular/compiler/src/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.cart = {};
    component.cart.cartPrice = 0.0;
    component.cart.cartItems = [];
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cart object ', () => {
    expect(component.cart).toBeTruthy();
  })

  it('should have cartItems and cartPrice as properties in cart property', () => {
    expect(Object.keys(component.cart)).toContain('cartPrice');
    expect(Object.keys(component.cart)).toContain('cartItems');
  })

});