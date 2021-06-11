import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  public recipe: Recipe = new Recipe(null);
  private key: number;

  constructor(private _firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = +params['id'];
      this._firebaseService.getRecipe(this.key).valueChanges().subscribe(recipe => {
        this.recipe = new Recipe(recipe);
      })
    })
  }

}
