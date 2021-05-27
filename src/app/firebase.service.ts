import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Recipe } from './models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbRef = '/api/results';
  private fb;

  constructor(private db: AngularFireDatabase) {
    this.fb = db;
  }

  getRecipe(key: number): AngularFireObject<Recipe> {
    return this.fb.object(`${this.dbRef}/${key}`);
  }

  async updateProps(key: number, props: object): Promise<void> {
    this.fb.object(`${this.dbRef}/${key}`).update(props);
  }


}
