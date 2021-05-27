import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  dbRef = `/api/results/${0}`;
  recipe: any;
  fb;
  btnColor = "#f3f3f3";
  constructor(private db: AngularFireDatabase) {
    this.fb = db;
  }

  ngOnInit(): void {
    this.fb.object(this.dbRef).valueChanges().subscribe(recipe => {
      this.recipe = recipe;
      if (this.recipe.saved) {
        this.btnColor = "#adadad";
      }
    });
  }

  addToFavorite(): void {
    this.fb.object(`${this.dbRef}`).update({ saved: !this.recipe.saved }).then(() => {
      this.btnColor = this.recipe.saved ? "#adadad" : "#f3f3f3";
      console.log("Recipe saved updated.");
    }).catch(err => {
      console.log(err);
    });
  }

}
