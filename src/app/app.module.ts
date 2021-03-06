import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductPageComponent } from './product-page/product-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PrimaryButtonDirective } from './primary-button.directive';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { FirebaseService } from './firebase.service';

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
    RecipesCarouselComponent,
    ProductCarouselComponent,
    ProductPageComponent,
    RecipePageComponent,
    CommentSectionComponent,
    SearchPageComponent,
    PrimaryButtonDirective,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
