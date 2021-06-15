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
  public key: number;
  public gradeArr: string[] = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
  public allGrades: number = 0;
  public result: string = "No Reviews"

  constructor(private _firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = +params['id'];
      this._firebaseService.getRecipe(this.key).valueChanges().subscribe(recipe => {
        this.recipe = new Recipe(recipe);
      })
    })
    this._firebaseService.getRecipe(this.key).valueChanges().subscribe(recipe => {
      this.allGrades = 0;
      this.gradeArr = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
      if (recipe.comments && recipe.comments.length > 0) {
        recipe.comments.forEach(el => {
          this.allGrades += el.grade;
        })
        let avg = this.allGrades / (recipe.comments.length - 1);
        this.result = `${avg.toFixed(2)} Stars`;
        for (let i = Math.floor(avg) - 1; i >= 0; i--) {
          this.gradeArr[i] = "star";
        }
      }
    })
  }

}
