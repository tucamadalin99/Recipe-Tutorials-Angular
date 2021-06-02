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
      }
    })
  }

}
