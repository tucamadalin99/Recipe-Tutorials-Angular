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

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getAllRecipes().valueChanges().subscribe(recipes => {
      recipes.forEach(recipe => {
        this.categories = [...this.categories, ...recipe.tags];
      })
      this.categories = _.uniq(this.categories);
    })
  }



}
