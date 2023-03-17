import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address, City, Country, Customer} from "../helpers/shared";
import {environment} from "../environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient) { }


  getCustomerList(){
    return this.http.get<Customer[]>(environment.apiUrl + 'customers')
      .pipe(map(customer => {
        return customer
      }));
  }

  getAddressList(){
    return this.http.get<Address[]>(environment.apiUrl + 'address')
      .pipe(map(address => {
        return address
      }));
  }

  getCitiesList(){
    return this.http.get<City[]>(environment.apiUrl + 'cities')
      .pipe(map(cities => {
        return cities
      }));
  }

  getCountriesList(){
    return this.http.get<Country[]>(environment.apiUrl + 'countries')
      .pipe(map(countries => {
        return countries
      }));
  }
}
