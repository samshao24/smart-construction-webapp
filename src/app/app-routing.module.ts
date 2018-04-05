import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CreateRoomComponent} from './room/create-room.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinancialSetupComponent} from "./project/setup/financial/financial-setup.component";
import {MaterialSetupComponent} from "./project/setup/material/material-setup.component";

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},

  // Routing to Main Project View
  {path: 'project/all', component: CreateCustomerComponent},
  // Routing to project financial setup view
  {path: 'project/financial/setup', component: FinancialSetupComponent},
  // Routing to Painting material setup view
  {path: 'project/material/setup', component: MaterialSetupComponent},
  // Routing to Painting Project
  {path: 'paint/room/create', component: CreateRoomComponent},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
