import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() updateCart: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  addToCart(productName) {
    this.updateCart.emit(productName);
  }

  onImgClick(): void {
    console.log("Product image clicked to be redirected to item page...")
  }

}
