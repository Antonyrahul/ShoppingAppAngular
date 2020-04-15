import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {ProductService} from '../product.service'

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
@Input() productdetails;
category;
prod;
  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService) {
/*this.category = this.activatedroute.snapshot.params.id
    this.productservice.getProducts(this.category).subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
   })*/
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.category = this.activatedroute.snapshot.params.id
      console.log(this.category)
      this.productservice.getProducts({"productcategory":this.category}).subscribe((data)=>{
        console.log(data.data)
        this.prod = data.data
     })
  
    });
    
  }

}
