import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Observable, of } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

import { ProductCarouselComponent } from './product-carousel.component';

describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;
  let angularFireStub = {
    getAllRecipes(): Observable<Recipe[]> {
      return of([new Recipe(null), new Recipe(null), new Recipe(null)])
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCarouselComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FirebaseService, useValue: angularFireStub }],
      imports: [SlickCarouselModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of recipes returned', () => {
    angularFireStub.getAllRecipes().subscribe((recipes) => {
      expect(recipes.length).toBeGreaterThan(0);
    })
  })

  it('should have a Recipe type array returned', () => {
    angularFireStub.getAllRecipes().subscribe((recipes) => {
      recipes.forEach(recipe => {
        expect(recipe instanceof Recipe).toBe(true, 'instance of Recipe');
      })
    })
  })

});
