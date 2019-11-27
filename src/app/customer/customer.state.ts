import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Customer } from './models';
import { AddCustomer } from './customer.actions';

export interface CustomerStateModel {
  customers: Customer[];
}

@State<CustomerStateModel>({
  name: 'customerState',
  defaults: {
    customers: []
  }
})
export class CustomerState {

  @Action(AddCustomer)
  addCustomer(ctx: StateContext<CustomerStateModel>, action: AddCustomer) {
    const state = ctx.getState();
    ctx.patchState({
      customers: [
        ...state.customers,
        action.customer
      ]
    });
  }
}
