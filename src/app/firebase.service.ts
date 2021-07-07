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

  getRecipe(key: number): Observable<Recipe> {
    return this.firebaseDatabase.object(`${this.dbRef}/${key}`).valueChanges() as Observable<Recipe>;
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.firebaseDatabase.list(`${this.dbRef}`).valueChanges() as Observable<Recipe[]>;
  }

  async updateProps(key: number, props: object): Promise<void> {
    this.firebaseDatabase.object(`${this.dbRef}/${key}`).update(props);
  }

  getCartInfo(): Observable<any> {
    return this.firebaseDatabase.object('/1').valueChanges() as Observable<any>;
  }

  async updateCart(newPrice: number, oldPrice: number): Promise<any> {
    this.firebaseDatabase.database.ref('/1').update({ cartPrice: oldPrice + newPrice });
  }

  async addToCart(product: string): Promise<void> {
    this.firebaseDatabase.database.ref('/1/cartItems').push(product);
  }

  async postComment(i: number, input: any): Promise<void> {
    this.firebaseDatabase.database.ref(`/api/results/${i}/comments/${input.userId}`).set(input);
  }

  async deleteComment(i: number, userId: number) {
    this.firebaseDatabase.database.ref(`/api/results/${i}/comments/${userId}`).remove();
  }

}
