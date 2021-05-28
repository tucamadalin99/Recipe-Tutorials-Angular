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
    const prop: object = { saved: !this.recipe.saved };

    this.firebaseService.updateProps(0, prop).then(() => {
      console.log("'Saved' property changed.");
    }).catch(err => console.log(err));

  }

  onUpdateLiked(): void {
    const prop: object = { liked: !this.recipe.liked };

    this.firebaseService.updateProps(0, prop).then(() => {
      console.log("'Liked' property changed.");
    }).catch(err => console.log(err));

  }

}
