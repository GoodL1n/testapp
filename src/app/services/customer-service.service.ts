import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Customer} from "../helpers/shared";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  public customer$: BehaviorSubject<Customer | null>;

  constructor(
  ) {
    this.customer$ = new BehaviorSubject<Customer | null>(null);
  }

  public setCustomer(customer:Customer){
    this.customer$.next(customer);
  }
}
