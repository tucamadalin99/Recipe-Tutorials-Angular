import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Recipe } from '../models/Recipe';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss', '../app.component.scss']
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
