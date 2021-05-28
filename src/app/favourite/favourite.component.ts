import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
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
