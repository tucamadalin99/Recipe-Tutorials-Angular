import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  recipe: any;
  btnColor = "#f3f3f3";
  constructor(private fbService: FirebaseService) { }

  ngOnInit(): void {
    this.fbService.getRecipe(0).valueChanges().subscribe(recipe => {
      this.recipe = recipe;
      if (this.recipe.liked) {
        this.btnColor = "#adadad";
      }
    })
  }

  addLike(): void {
    this.fbService.updateProps(0, { liked: !this.recipe.liked }).then(() => {
      this.recipe.liked = !this.recipe.liked;
      this.btnColor = this.recipe.liked ? "#adadad" : "#f3f3f3";
    });

  }

}
