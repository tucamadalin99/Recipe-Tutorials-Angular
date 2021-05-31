import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "shop", component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
