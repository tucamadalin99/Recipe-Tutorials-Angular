import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  allRecipes: Recipe[];
  categories: string[] = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getAllRecipes().valueChanges().subscribe(recipes => {
      this.allRecipes = recipes;
      recipes.forEach(recipe => {
        this.categories = [...this.categories, ...recipe.tags];
      })
      this.categories = _.uniq(this.categories);
    })
  }

  onUpdateCart(productName: string) {
    this.firebaseService.addToCart(productName).then(() => {
      console.log(productName + " added to cart.")
    }).catch(() => {
      console.log("An error has occured")
    })
  }

}
