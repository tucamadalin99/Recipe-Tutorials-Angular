import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _firebaseService: FirebaseService, private _toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {

  }

  addToCart(productName) {
    this._firebaseService.addToCart(productName).then(() => {
      this._toastr.success(`${productName} added to cart!`, "Success")
    })
  }

  onImgClick(): void {
    this.router.navigate(['/products', this.recipe.key]);
  }

}
