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

  getCartInfo(): AngularFireObject<any> {
    return this.firebaseDatabase.object('/1');
  }

  async addToCart(product: string): Promise<void> {
    this.firebaseDatabase.database.ref('/1/cartItems').push(product);
  }

}
