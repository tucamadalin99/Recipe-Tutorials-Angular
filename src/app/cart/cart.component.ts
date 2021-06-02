import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart;
  isOpened: boolean = false;

  openDialog(): void {
    this.isOpened = true;
  }
  closeDialog(): void {
    this.isOpened = false;
  }

  constructor() { }

  ngOnInit(): void { }

}
