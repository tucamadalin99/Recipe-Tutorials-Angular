import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  recipe: any;
  btnColor = "#f3f3f3";

  constructor(private fbService: FirebaseService) { }

  ngOnInit(): void {
    this.fbService.getRecipe(0).valueChanges().subscribe(recipe => {
      this.recipe = recipe;
      if (this.recipe.saved) {
        this.btnColor = "#adadad";
      }
    });
  }

  addToFavorite(): void {
    this.fbService.updateProps(0, { saved: !this.recipe.saved }).then(() => {
      this.recipe.saved = !this.recipe.saved;
      this.btnColor = this.recipe.saved ? "#adadad" : "#f3f3f3";
    })
  }

}
