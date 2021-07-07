import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { slideConfig } from '../config/slick';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-recipes-carousel',
  templateUrl: './recipes-carousel.component.html',
  styleUrls: ['./recipes-carousel.component.scss']
})
export class RecipesCarouselComponent implements OnInit {
  private MAX_ITEMS: number = 12;
  slideConfig = slideConfig;
  public featuredRecipes: Recipe[];

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit(): void {

    this._firebaseService.getAllRecipes().subscribe(recipes => {
      this.featuredRecipes = recipes.filter(el => el.featured);
      if (this.featuredRecipes.length > this.MAX_ITEMS) {
        this.featuredRecipes = this.featuredRecipes.slice(0, this.MAX_ITEMS);
      }
    })
  }


}
