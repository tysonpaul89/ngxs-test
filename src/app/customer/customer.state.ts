import { State, Action, StateContext } from "@ngxs/store";
import { Customer } from './models';
import { AddCustomer } from './customer.actions';

export interface CustomerStateModel {
  customers: Customer[];
}

@State<CustomerStateModel>({
  name: 'shop',
  defaults: {
    customers: []
  }
})
export class CustomerState {

  @Action(AddCustomer)
  addCustomer(ctx: StateContext<CustomerStateModel>, action: AddCustomer) {
    const state = ctx.getState()
    console.log(state)
    ctx.patchState({
      customers: [
        ...state.customers,
        action.customer
      ]
    });
  }
}
