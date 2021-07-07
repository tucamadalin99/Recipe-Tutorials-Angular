import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';

import { ProductCarouselComponent } from './product-carousel.component';

describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;
  let angularFireStub = { list: () => { } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCarouselComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FirebaseService, { provide: AngularFireDatabase, useValue: angularFireStub }]
    })
      .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductCarouselComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
