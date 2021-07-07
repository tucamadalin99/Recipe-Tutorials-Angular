import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { slideConfig } from '../config/slick';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input() featuredRecipes: Recipe[];
  slideConfig = slideConfig;
  private MAX_ITEMS: number = 12;

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

