import { Customer } from './models';

export class AddCustomer {
  static readonly type = '[Customer] Add Customer'
  constructor(public customer: Customer) { }
}
