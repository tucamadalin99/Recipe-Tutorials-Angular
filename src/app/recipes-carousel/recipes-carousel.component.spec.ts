import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';

import { RecipesCarouselComponent } from './recipes-carousel.component';

describe('RecipesCarouselComponent', () => {
  let component: RecipesCarouselComponent;
  let fixture: ComponentFixture<RecipesCarouselComponent>;
  let angularFireStub = { list: () => { } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesCarouselComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FirebaseService, { provide: AngularFireDatabase, useValue: angularFireStub }]
    })
      .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RecipesCarouselComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
