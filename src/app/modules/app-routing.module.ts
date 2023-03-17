import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from "../components/orders/orders.component";
import {StatisticComponent} from "../components/statistic/statistic.component";
import {Role} from "../helpers/shared";
import {AuthGuard} from "../helpers/auth.guard";
import {LoginComponent} from "../components/login/login.component";
import {RegistrationComponent} from "../components/registration/registration.component";

const routes: Routes = [
  {
    path:'order',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'stat',
    component: StatisticComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
