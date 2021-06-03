import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
