import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

//193.161.193.99:51492
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }
  postProduct(data):Observable<any>
  {
    return this.http.post('https://shoppingappnode.herokuapp.com/addproduct',data)
  }
  getProducts(data):Observable<any>
  {
    console.log(data)
    return this.http.post('https://shoppingappnode.herokuapp.com/displayproducts',data)
  }
  editProduct(data):Observable<any>{
    console.log(data)
    return this.http.post('https://shoppingappnode.herokuapp.com/editproduct',data)
  }

  verifyProduct(data):Observable<any>{
    console.log(data)
    return this.http.post('https://shoppingappnode.herokuapp.com/verifyproduct',data)
  }
}
