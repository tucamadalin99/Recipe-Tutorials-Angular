import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';
import { RouterTestingModule } from '@angular/router/testing';

import { FeaturedItemComponent } from './featured-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeaturedItemComponent', () => {
  let component: FeaturedItemComponent;
  let fixture: ComponentFixture<FeaturedItemComponent>;
  let angularFireDatabaseStub = { hist: () => { } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedItemComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FirebaseService,
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
