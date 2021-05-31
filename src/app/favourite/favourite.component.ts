import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FavouriteComponent implements OnInit {

  @Input() isFavourite;
  @Output() updateFavourite: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.updateFavourite.emit();
  }

}
