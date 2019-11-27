import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { AddCustomer } from '../customer.actions';
import { Customer } from '../models';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addCustomer(name: string) {
    const customer: Customer = {
      id: new Date().getMilliseconds(),
      name
    };
    this.store.dispatch(new AddCustomer(customer));
  }

}
