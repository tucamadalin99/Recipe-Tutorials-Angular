import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

import { CommentSectionComponent } from './comment-section.component';

describe('CommentSectionComponent', () => {
  let component: CommentSectionComponent;
  let fixture: ComponentFixture<CommentSectionComponent>;
  let angularFireStub = {
    getRecipe(index: number): Observable<Recipe> {
      return of(new Recipe(null));
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentSectionComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot()],
      providers: [{ provide: FirebaseService, useValue: angularFireStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
