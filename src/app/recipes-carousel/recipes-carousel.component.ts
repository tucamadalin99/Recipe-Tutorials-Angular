import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipes-carousel',
  templateUrl: './recipes-carousel.component.html',
  styleUrls: ['./recipes-carousel.component.scss']
})
export class RecipesCarouselComponent implements OnInit {
  @Input() featuredRecipes: Recipe[];

  slideConfig = {
    dots: true,
    mobileFirst: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
  };

  constructor() { }

  ngOnInit(): void {

  }


}
