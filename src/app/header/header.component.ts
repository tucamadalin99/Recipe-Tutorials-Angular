import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: any = new Object(null);

  constructor(private firebaseService: FirebaseService, private route: Router) { }

  private getInfo(): void {
    this.firebaseService.getCartInfo().valueChanges().subscribe(cart => {
      if (cart) {
        this.cart = new Object(cart);
        let counts = {};
        let formattedArr = [];
        //Counting repetitions of items
        if (!this.cart.cartItems) {
          this.cart.cartPrice = 0;
          this.cart.cartPrice = this.cart.cartPrice.toFixed(2);
        }

        if (this.cart.cartItems) {
          for (let prop in this.cart.cartItems) {
            counts[this.cart.cartItems[prop].toLowerCase()] =
              (counts[this.cart.cartItems[prop].toLowerCase()] || 0) + 1;
          }

          for (let prop in counts) {
            formattedArr.push(`${prop} ${counts[prop]}x`);
          }
          this.cart.cartItems = formattedArr;
        }

      }
    })
  }

  public searchItem(value) {
    if (!value) {
      this.route.navigate(['/search', "all-categories", "all-items"]);
    } else {
      this.route.navigate(['/search', "all-categories", value]);
    }
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
