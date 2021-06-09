import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit(): void {

  }

  addToCart(productName) {
    this._firebaseService.addToCart(productName);
  }

  onImgClick(): void {
    console.log("Product image clicked to be redirected to item page...")
  }

}
