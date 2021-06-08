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

  private getInfo(): void {
    this.firebaseService.getCartInfo().valueChanges().subscribe(cart => {
      if (cart) {
        this.cart = new Object(cart);
        let counts = {};
        let formattedArr = [];
        //Counting repetitions of items
        for (let prop in this.cart.cartItems) {
          counts[this.cart.cartItems[prop].toLowerCase()] =
            (counts[this.cart.cartItems[prop].toLowerCase()] || 0) + 1;
        }

        for (let prop in counts) {
          formattedArr.push(`${prop} ${counts[prop]}x`);
        }
        this.cart.cartItems = formattedArr;
      }
    })
  }

  public searchItem(value) {
    console.log(`You searched for ${value}`);
  }

  ngOnInit() {
    if (window['userIsLoggedIn']) {
      this.getInfo();
    } else if (localStorage.getItem('userId') == '1'
      && localStorage.getItem('user') == 'user'
      && localStorage.getItem('password') == 'user'
    ) {
      this.getInfo();
    } else {
      this.cart = new Object(null);
      this.cart.cartPrice = 0.00;
      this.cart.cartItems = [];
      this.cart.notLogged = true;
    }

  }

}
