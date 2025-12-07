import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './home/components/products-details/products-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'product/:id',component:ProductsDetailsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
