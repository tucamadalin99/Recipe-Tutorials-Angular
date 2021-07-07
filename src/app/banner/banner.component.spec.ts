import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let recipeMock = {
    key: 1,
    name: "Mixed berry pie with fresh fruits",
    description: "Lorem ipsum",
    imageUrl: "someImageUrl",
    featured: true,
    liked: true,
    saved: false,
    tags: ['tag1', 'tag2', 'tag3'],
    type: 'each',
    price: 0.0,
    comments: ['com', 'com2']
  }
  let angularFireStub = {
    getRecipe(): Observable<Recipe> { return of(new Recipe(recipeMock)) },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{ provide: FirebaseService, useValue: angularFireStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the required properties for the template', () => {
    angularFireStub.getRecipe().subscribe(recipe => {
      expect(Object.keys(recipe)).toContain('imageUrl');
      expect(Object.keys(recipe)).toContain('tags');
      expect(Object.keys(recipe)).toContain('name');
      expect(Object.keys(recipe)).toContain('description');
    })
  })

  it('should have the name of the recipe rendered', () => {
    const recipeTitle = fixture.debugElement.query(By.css('.title'));
    fixture.detectChanges();
    expect(recipeTitle.nativeElement.textContent).toBe('Mixed berry pie with fresh fruits')
  })

});
