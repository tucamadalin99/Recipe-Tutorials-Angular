import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  recipe: Recipe = new Recipe(null);

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getRecipe(0).valueChanges().subscribe((recipe: any) => {
      this.recipe = new Recipe(recipe);
    })
  }

  onUpdateFavourite(): void {
    this.firebaseService.updateProps(0, { saved: !this.recipe.saved }).then(() => {
      console.log("'Saved' property changed.");
    }).catch(err => console.log(err));
  }

  onUpdateLiked(): void {
    this.firebaseService.updateProps(0, { liked: !this.recipe.liked }).then(() => {
      console.log("'Liked' property changed.");
    }).catch(err => console.log(err));
  }

}
