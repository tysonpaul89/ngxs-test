import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { CustomerState } from './customer.state';

import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [ListCustomerComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxsModule.forFeature([CustomerState])
  ]
})
export class CustomerModule { }
