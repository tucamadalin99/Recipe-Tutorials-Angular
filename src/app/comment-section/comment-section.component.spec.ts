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
    getRecipe(): Observable<Recipe> {
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

  it('should return a recipe', () => {
    angularFireStub.getRecipe().subscribe(recipe => {
      expect(recipe).toBeTruthy();
    })
  })

  it('should have an invalid form when empty', () => {
    expect(component.commentForm.valid).toBeFalsy();
  })

  it('should have an invalid comment control when empty', () => {
    let comment = component.commentForm.controls['comment'];
    expect(comment.valid).toBeFalsy();
  })

  it('should have an invalid name control if empty', () => {
    let name = component.commentForm.controls['name'];
    expect(name.valid).toBeFalsy();
  })

  it('should have a zero grade control when empty', () => {
    let grade = component.commentForm.controls['grade'];
    expect(grade.value).toEqual(0);
  })
});
