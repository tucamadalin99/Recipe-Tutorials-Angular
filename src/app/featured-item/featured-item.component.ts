import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.scss']
})
export class FeaturedItemComponent implements OnInit {

  @Input() recipeItem: Recipe = new Recipe(null);
  @Input() index: number = 0;

  constructor(private firebaseService: FirebaseService) { }

  onUpdateFavourite(): void {
    const prop: object = { saved: !this.recipeItem.saved };

    this.firebaseService.updateProps(this.index, prop).then(() => {
      console.log("'Saved' property changed.");
    }).catch(err => console.log(err));
  }


  ngOnInit(): void {
    console.log(this.recipeItem);
  }



}
