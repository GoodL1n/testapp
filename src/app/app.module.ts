import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./modules/material-module";
import { OrdersComponent } from './components/orders/orders.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import { RegistrationComponent } from './components/registration/registration.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerButtonComponent } from './components/customer-button/customer-button.component';
import {NgChartsModule} from "ng2-charts";
import { BarComponent } from './components/bar/bar.component';
import { LineComponent } from './components/line/line.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    StatisticComponent,
    ToolbarComponent,
    NotfoundpageComponent,
    LoginComponent,
    RegistrationComponent,
    CustomerComponent,
    CustomerButtonComponent,
    BarComponent,
    LineComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    NgChartsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
