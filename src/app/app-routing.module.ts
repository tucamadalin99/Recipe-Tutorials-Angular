import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "shop", component: ShopComponent },
  { path: "products/:id", component: ProductPageComponent },
  { path: "recipe/:id", component: RecipePageComponent },
  { path: "search/:word/:search", component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
