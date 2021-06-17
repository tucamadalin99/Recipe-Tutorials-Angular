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
  private cartPrice: number = 0;

  constructor(private _firebaseService: FirebaseService, private _toastr: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this._firebaseService.getCartInfo().valueChanges().subscribe(cart => {
      this.cartPrice = cart.cartPrice;
    })
  }

  addToCart(product: string, price: number) {
    this._firebaseService.getCartInfo().update({ cartPrice: price + this.cartPrice });
    this._firebaseService.addToCart(product).then(() => {
      this._toastr.success(`${product} added to cart!`, "Success")
    })
  }

  onImgClick(): void {
    this.router.navigate(['/products', this.recipe.key]);
  }

}
