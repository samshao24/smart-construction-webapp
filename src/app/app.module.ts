import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './data.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';

import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {CreateRoomComponent} from "./room/create-room.component";
import {FinancialSetupComponent} from "./project/setup/financial/financial-setup.component";
import {MaterialSetupComponent} from "./project/setup/material/material-setup.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,

    // Room Modue
    CreateRoomComponent,

    // Setup Module
    FinancialSetupComponent,
    MaterialSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
