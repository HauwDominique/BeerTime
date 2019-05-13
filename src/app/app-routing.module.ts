import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {BeersListComponent} from './beers-list/beers-list.component';
import {ShoppingViewComponent} from './shopping-view/shopping-view.component';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PopInComponent} from "./pop-in/pop-in.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {OrderCartComponent} from "./order-cart/order-cart.component";


const routes:Routes = [
  { path: '', redirectTo:'/list', pathMatch:'full'},
  { path: 'list', component:BeersListComponent},
  { path: 'detail/:id', component: BeerDetailComponent },
  // { path: 'orderCart', component: OrderCartComponent },
  { path: 'shopping', component:ShoppingViewComponent },
  { path: 'shoppingList', component:ShoppingListComponent},
  { path: 'popIn', component:PopInComponent },
  { path: 'connexion', component:ConnexionComponent }
]


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
