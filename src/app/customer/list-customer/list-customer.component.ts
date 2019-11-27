import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CustomerState, CustomerStateModel } from '../customer.state';
import { Observable } from 'rxjs';
import { Customer } from '../models';
import { RemoveCustomer } from '../customer.actions';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store) {
    this.customers$  = this.store.select(state => state.customerState.customers);
  }

  ngOnInit() {
  }

  removeCustomer(id: number) {
    this.store.dispatch(new RemoveCustomer(id));
  }

}
