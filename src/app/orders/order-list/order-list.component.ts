import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {


  constructor(public customerService:CustomerService) { }
  ngOnInit(): void {
    console.log("Hi i am Order  List component");
    this.customerService.getAllCustomerOrders();
  }

}
