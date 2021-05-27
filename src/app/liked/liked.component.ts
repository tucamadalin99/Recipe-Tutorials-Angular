import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  recipe: any;
  isLiked = false;
  constructor(private fbService: FirebaseService) { }

  ngOnInit(): void {
    this.fbService.getRecipe(0).snapshotChanges().subscribe((recipe: any) => {
      this.recipe = recipe;
      if (this.recipe.liked) {
        this.isLiked = true;
      }

    })
  }

  addLike(): void {
    this.fbService.updateProps(0, { liked: !this.recipe.liked }).then(() => {
      this.recipe.liked = this.recipe.liked ? !this.recipe.liked : this.recipe.liked;
      this.isLiked = !this.isLiked;
    });

  }

}
