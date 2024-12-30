import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { OrderItem } from '../model/order-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

//declare variables
  //list of Orders

  customers:Customer[]=[];
  orderedItems:OrderItem[]=[];

//DI: Httpclient

constructor(private httpClient:HttpClient) { }

 //1- Get all Orders and customers

 getAllCustomerOrders():void{
  this.httpClient.get(environment.apiUrl+'orders')
  .toPromise()
  .then((response:any)=>{
    if(response ?.Value){
      this.customers=response.Value;
      console.log(this.customers);
    }
   

  })
  .catch((error)=>{
    console.log('Error occured: ',error);
  
});
}
}
