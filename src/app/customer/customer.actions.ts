import { Customer } from './models';

export class AddCustomer {
  static readonly type = '[Customer] Add Customer';
  constructor(public customer: Customer) { }
}

export class RemoveCustomer {
  static readonly type = '[Customer] Remove Customer';
  constructor(public customerId: number) {}
}
