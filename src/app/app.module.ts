import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikedComponent } from './liked/liked.component';
import { BannerComponent } from './banner/banner.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FeaturedItemComponent } from './featured-item/featured-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RecipesCarouselComponent } from './recipes-carousel/recipes-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShopComponent,
    RecipesComponent,
    FavouriteComponent,
    LikedComponent,
    BannerComponent,
    RecipeItemComponent,
    HomepageComponent,
    CartComponent,
    HeaderComponent,
    FeaturedItemComponent,
    ProductItemComponent,
    RecipesCarouselComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Angular-Easymeals'),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
