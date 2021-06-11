import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss']
})
export class FeaturedItemComponent implements OnInit {

  @Input() recipeItem: Recipe = new Recipe(null);
  @Input() index: number = 0;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  onUpdateFavourite(): void {
    const prop: object = { saved: !this.recipeItem.saved };

    this.firebaseService.updateProps(this.index, prop).then(() => {
      console.log("'Saved' property changed.");
    }).catch(err => console.log(err));
  }

  onRecipeClick(): void {
    this.router.navigate(['/recipe', this.recipeItem.key]);
  }

  ngOnInit(): void {
  }

}
