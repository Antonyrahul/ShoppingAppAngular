import { Component, OnInit } from '@angular/core';
import {CategoryComponent} from "../category/category.component"
import {ProductService} from '../product.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  productdetails = new CategoryComponent()
  //prod = this.productdetails.proddetails
  prod;
  constructor(private productservice :ProductService) { 
    this.productservice.getProducts('').subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
}

  ngOnInit(): void {
    
  }

}
