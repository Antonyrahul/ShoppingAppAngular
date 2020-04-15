import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productform;
  verifyform;
  status = "not verified";
  constructor(private productservice :ProductService,private router:Router ) { 


    this.verifyform = new FormGroup({
      productid:new FormControl('',Validators.required),
     
      
      
    })
    console.log(this.verifyform.get('productid').value)

   
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
  verifyproduct()

  {
    this.productservice.verifyProduct(this.verifyform.value).subscribe((data)=>{
      console.log(data)
      if(data.message == "sucess")
      {
      this.status ="verified"
      this.editform(data.data);
      }
      else
      this.status ="not verifed"

  })
}

editproduct()

  {
    if(this.productform.valid)
    this.productservice.editProduct(this.productform.value).subscribe((data)=>{
      console.log(data)
     

  })
}

editform(data)
{
  this.verifyform.controls['productid'].disable();

  console.log(data)
  this.productform = new FormGroup({
    productid:new FormControl(data.productid),
    productname:new FormControl(data.productname,Validators.required),
    productprice:new FormControl(data.productprice,Validators.required),
    productcategory:new FormControl(data.productcategory,Validators.required),
    productimage: new FormControl(data.productimage,Validators.required),
    productdescription : new FormControl(data.productdescription,Validators.required)
    
    
  })

}

}
