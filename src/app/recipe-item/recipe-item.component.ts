import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})

export class RecipeItemComponent implements OnInit {
  @Input() item = '';
  imageUrl: string;
  hasImg: boolean = true;
  sendItem(item: string): void {
    this.router.navigate(['/search', item, "all"]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.imageUrl = `../../assets/recipe-items/${this.item}.png`;
  }

}
