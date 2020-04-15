import { Component, OnInit ,Input} from '@angular/core';
import {CategoryComponent} from "../category/category.component"
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {ProductService} from '../product.service'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  
})
export class ProductdetailsComponent implements OnInit {
@Input() productdetailss;
prod;
productid;
//productdetails = new CategoryComponent()
//prod = this.productdetails.proddetails
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.productid = this.activatedroute.snapshot.params.id
      console.log(this.productid)
      
      this.productservice.getProducts({"productid":this.productid}).subscribe((data)=>{
        console.log(data.data)
        this.prod = data.data
     })
    });

  }

}
