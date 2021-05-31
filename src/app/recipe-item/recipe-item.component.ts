import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  hasImg: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
