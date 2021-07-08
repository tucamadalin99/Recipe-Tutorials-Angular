import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let fireDatabaseStub = {
    getAllRecipes(): Observable<Recipe[]> {
      return of([new Recipe(null), new Recipe(null), new Recipe(null)]);
    }
  };
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FirebaseService, useValue: fireDatabaseStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all the recipes', () => {
    fireDatabaseStub.getAllRecipes().subscribe((recipes) => {
      expect(recipes.length).toBeGreaterThan(0);
    })
  })
});
