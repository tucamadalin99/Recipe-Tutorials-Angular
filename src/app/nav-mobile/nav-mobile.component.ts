import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  public isToggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggle() {
    this.isToggled = !this.isToggled;
  }

}
