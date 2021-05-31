import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})

export class RecipeItemComponent implements OnInit {
  @Input() item = '';
  imageUrl: string;
  hasImg: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = `../../assets/recipe-items/${this.item}.png`;
  }

}
