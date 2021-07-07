import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  private key: number;
  public product: Recipe = new Recipe(null);

  constructor(private route: ActivatedRoute, private _firebaseService: FirebaseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.key = +params['id'];
      this._firebaseService.getRecipe(this.key).subscribe((recipe) => {
        this.product = new Recipe(recipe);
      })
    })
  }

  addProduct(): void {
    this._firebaseService.addToCart(this.product.name).then(() => {
      this.toastr.success(`${this.product.name} added to cart!`, "Success");
    }).catch(() => {
      this.toastr.error("An error has occurred...", "Error");
    })
  }
}
