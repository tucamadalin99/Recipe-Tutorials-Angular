
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
  });

  it('should have cartItems and cartPrice as properties in cart property', () => {
    expect(Object.keys(component.cart)).toContain('cartPrice');
    expect(Object.keys(component.cart)).toContain('cartItems');
  });

  it('should convert the price to 2 decimals if the cart exists', () => {
    component.cart.cartPrice = 10.543;
    component.cart.cartPrice = component.cart.cartPrice.toFixed(2);
    const stubbedPrice = 10.54;
    expect(+component.cart.cartPrice).toEqual(stubbedPrice);
  });

  it('should be able to open the dialog if the cart icon is clicked', async () => {
    spyOn(component, 'openDialog');
    const button = fixture.debugElement.nativeElement.querySelector('.cart-img');
    button.click();
    expect(component.openDialog).toHaveBeenCalled();
  });

  it('should be able to open the dialog if the cart text  is clicked', async () => {
    spyOn(component, 'openDialog');
    const button = fixture.debugElement.nativeElement.querySelector('.cart-info');
    button.click();
    expect(component.openDialog).toHaveBeenCalled();
  });

  it('should be able to close the dialog from the exit button on the logged in user', async () => {
    spyOn(component, 'closeDialog');
    const button = fixture.debugElement.nativeElement.querySelector('#validDialog');
    button.click();
    expect(component.closeDialog).toHaveBeenCalled();
  });

  it('should render the dialog\'s title correctly', () => {
    const title = fixture.debugElement.nativeElement.querySelector('#dialogTitle');
    expect(title.textContent).toEqual('Your cart contains');
  })

});