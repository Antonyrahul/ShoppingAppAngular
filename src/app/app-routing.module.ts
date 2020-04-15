import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PricingComponent} from "./pricing/pricing.component"
import { HomepageComponent } from "./homepage/homepage.component"
import { CategoryComponent } from './category/category.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component'
import { AddproductComponent } from './addproduct/addproduct.component'
import { CategorydetailsComponent } from './categorydetails/categorydetails.component'
import { EditproductComponent } from './editproduct/editproduct.component';



const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path :'price',
    component:PricingComponent
  },
  {
    path : 'category/:id',
    component:CategorydetailsComponent
  },
  {
    path :"category/mobiles/:id",
    component:ProductdetailsComponent
  },
  {
    path :"category/fashion/:id",
    component:ProductdetailsComponent
  },
  {
    path :"product/:id",
    component:ProductdetailsComponent
  },
  {
    path :"addproduct",
    component:AddproductComponent
  },
  {
    path :"edit",
    component:EditproductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
