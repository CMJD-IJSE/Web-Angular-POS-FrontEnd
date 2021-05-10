import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Share/header/header.component';
import { CustomerPageComponent } from './Components/Common/customer-page/customer-page.component';
import { OrderPageComponent } from './Components/Common/order-page/order-page.component';
import { OrderDetailsPageComponent } from './Components/Common/order-details-page/order-details-page.component';
import { ItemPageComponent } from './Components/Common/item-page/item-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTab, MatTabsModule} from "@angular/material/tabs";
import { AlertUIComponent } from './Components/Share/alert-ui/alert-ui.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerPageComponent,
    OrderPageComponent,
    OrderDetailsPageComponent,
    ItemPageComponent,
    AlertUIComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
