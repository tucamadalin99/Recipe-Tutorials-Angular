import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Recipe } from '../models/Recipe';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public categories: any[] = [];
  public allItems: Recipe[] = [];
  public currentItems: Recipe[] = [];
  public priceLimit: number = 0;
  public priceMax: number;
  public isFeatured: boolean = false;
  private categorySearch: string;
  private stringSearch: string;

  constructor(private _firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentString.subscribe(message => {
      if (this.router.url.includes("/search")) {
        this.currentItems =
          this.allItems.filter(el => el.name.toLowerCase().includes(message.toLowerCase()));
      }
    });
    let prices: number[] = [];
    this._firebaseService.getAllRecipes().valueChanges().subscribe(recipes => {
      recipes.forEach(recipe => {
        prices.push(recipe.price);
        recipe.tags.forEach(tag => {
          this.categories.push({ name: tag, isChecked: false });
        })
      })
      this.categories = _.uniq(this.categories);
      this.allItems = recipes;
      this.currentItems = this.allItems;
      this.priceMax = Math.max(...prices);
      this.priceMax = Math.round(this.priceMax);

      if (this.categorySearch !== "all-categories") {
        this.categories.forEach(el => {
          if (el.name == this.categorySearch) {
            el.isChecked = true;
            this.filterItems();
          }
        })
      }

      if (this.stringSearch !== 'all-items') {
        this.currentItems =
          this.allItems.filter(el => el.name.toLowerCase().includes(this.stringSearch.toLowerCase()));
      }
    })

    console.log('exec')
    this.route.params.subscribe(params => {
      this.categorySearch = params['word'];
      this.stringSearch = params['search'];
    })
  }

  setValue($event): void {
    this.priceLimit = $event.target.value;
  }

  filterItems(): void {
    this.currentItems = this.allItems;
    if (this.priceLimit > 0) {
      this.currentItems = this.filterByPrice();
    }
    if (this.isFeatured) {
      this.currentItems = this.filterByFeatured();
    }

    if (this.filterByCategories().length > 0)
      this.currentItems = this.filterByCategories();

  }

  filterByPrice(): Recipe[] {
    return this.currentItems.filter(el => el.price > 0 && el.price < this.priceLimit);
  }

  filterByFeatured(): Recipe[] {
    return this.currentItems.filter(el => el.featured);
  }

  filterByCategories(): Recipe[] {
    let filtered: Recipe[] = [];
    let checkedBoxes: any[] = this.categories.filter(el => el.isChecked);

    checkedBoxes.forEach(box => {
      this.currentItems.forEach(item => {
        item.tags.forEach(tag => {
          if (tag == box.name) {
            filtered.push(item);
          }
        })
      })
    })
    return _.uniq(filtered);
  }


}
