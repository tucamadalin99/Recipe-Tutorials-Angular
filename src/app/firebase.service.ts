import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Recipe } from './models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbRef = '/api/results';

  constructor() {
    // this.recipesRef = db.list(this.dbRef);
  }

  // getAll(): AngularFireList<Recipe> {
  //   // return this.recipesRef;
  // }


}
