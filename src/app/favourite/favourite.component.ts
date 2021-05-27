import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss', '../app.component.scss']
})
export class FavouriteComponent implements OnInit {
  recipe!: Recipe;

  constructor(private fbService: FirebaseService) { }

  ngOnInit(): void {
    this.fbService.getRecipe(0).valueChanges().subscribe((recipe: any) => {
      this.recipe = new Recipe(recipe);
    });
  }

  addToFavorite(): void {
    this.fbService.updateProps(0, { saved: !this.recipe.saved }).then(() => {
      this.recipe.saved = this.recipe.saved ? true : false;
    })
  }

}
