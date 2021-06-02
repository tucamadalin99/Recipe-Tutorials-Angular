import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from './firebase.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'recipe-tutorials';
  cart: any = new Object(null);

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getCartInfo().valueChanges().subscribe(cart => {
      if (cart) {
        this.cart = new Object(cart);
        let counts = {};
        let formattedArr = [];
        //Counting repetitions of items
        this.cart.cartItems.forEach((x) => { counts[x.toLowerCase()] = (counts[x.toLowerCase()] || 0) + 1; });
        for (let prop in counts) {
          formattedArr.push(`${prop} ${counts[prop]}x`);
        }
        this.cart.cartItems = formattedArr;
      }
    })
  }

}
