import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Recipe } from './models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbRef = '/api/results';

  constructor(private firebaseDatabase: AngularFireDatabase) {
  }

  getRecipe(key: number): AngularFireObject<Recipe> {
    return this.firebaseDatabase.object(`${this.dbRef}/${key}`);
  }

  getAllRecipes(): AngularFireList<Recipe> {
    return this.firebaseDatabase.list(`${this.dbRef}`);
  }

  async updateProps(key: number, props: object): Promise<void> {
    this.firebaseDatabase.object(`${this.dbRef}/${key}`).update(props);
  }


}
