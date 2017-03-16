import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';


export class MyCustomersService {

  constructor() { }


  hello(){
    console.log('Hello from MyCustomersService')
  }
}


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  // providers:[CustomersService]
  viewProviders:[{provide:CustomersService, useClass: MyCustomersService}]
})
export class CustomerListComponent implements OnInit {

  constructor(private service: CustomersService) { }

case: string = 'lower'
  ngOnInit() {

this.service.hello();
  }

}
