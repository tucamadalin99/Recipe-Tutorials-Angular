import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss', '../app.component.scss']
})
export class LikedComponent implements OnInit {
  recipe!: Recipe;
  constructor(private fbService: FirebaseService) {

  }

  ngOnInit(): void {
    this.fbService.getRecipe(0).valueChanges().subscribe((recipe: any) => {
      this.recipe = new Recipe(recipe);
    })
  }

  addLike(): void {
    this.fbService.updateProps(0, { liked: !this.recipe.liked }).then(() => {
      this.recipe.liked = this.recipe.liked ? true : false;
    });

  }

}
