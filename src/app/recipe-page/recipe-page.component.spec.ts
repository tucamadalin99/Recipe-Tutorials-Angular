import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

import { RecipePageComponent } from './recipe-page.component';

describe('RecipePageComponent', () => {
  let component: RecipePageComponent;
  let fixture: ComponentFixture<RecipePageComponent>;
  let angularFireStub = {
    getRecipe(key: number): Observable<Recipe> {
      return of(new Recipe(null));
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipePageComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FirebaseService, useValue: angularFireStub }]
    })
      .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RecipePageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    const fixture = TestBed.createComponent(RecipePageComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
