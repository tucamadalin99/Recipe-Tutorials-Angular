import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Recipe } from './models/Recipe';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-tutorials';
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
}
