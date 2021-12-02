import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [{
  path:"", component: HomeComponent,
}, {
  path:"blog", component: BlogComponent
}, {
  path:"travels", component: TravelsComponent
}, {
  path:"shopping-cart", component: ShoppingCartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
