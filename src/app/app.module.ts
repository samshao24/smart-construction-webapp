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
import {RoomListComponent} from "./room/list/room-list.component";
import {ProjectDataService} from "./project/data/project-data.service";
import {ProjectListComponent} from "./project/list/project-list.component";
import {ProjectDetailComponent} from "./project/detail/project-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,

    // Room Module
    CreateRoomComponent,
    RoomListComponent,

    // Project Module
    ProjectListComponent,
    ProjectDetailComponent,
    FinancialSetupComponent,
    MaterialSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    ProjectDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
