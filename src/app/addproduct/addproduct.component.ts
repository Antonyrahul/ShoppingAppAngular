import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productform;
  constructor(private productservice :ProductService,private router:Router ) { 
    this.productform = new FormGroup({
      productid:new FormControl('',Validators.required),
      productname:new FormControl('',Validators.required),
      productprice:new FormControl('',Validators.required),
      productcategory:new FormControl('',Validators.required),
      productimage: new FormControl('http://placehold.it/700x400',Validators.required),
      productdescription : new FormControl('',Validators.required)
      
    })
  }

  ngOnInit(): void {
  }
  processdata()
  {
    if(this.productform.valid)
    console.log(this.productform.value)
    this.productservice.postProduct(this.productform.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['/'])

    })
  }

}
