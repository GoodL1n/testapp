import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Address, City, Country, Customer, User} from "../../helpers/shared";
import {MatTableDataSource} from "@angular/material/table";
import {HttpServiceService} from "../../services/http-service.service";
import {AuthenticationService} from "../../services/autentication.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  loading = false;
  user?: User;
  userFromApi?: User;

  cities: City[] = [];
  addresses: Address[] = [];
  countries: Country[] = [];

  customers: any[] = [];
  displayColumns: string[] = ['customer_id', 'first_name', 'last_name', 'address_id', 'email', 'activebool', 'button']
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();

  constructor(private httpService: HttpServiceService,
              private authService: AuthenticationService,
              private changeDetRefs: ChangeDetectorRef) {
    this.user = <User>this.authService.userValue;
  }

  ngOnInit(): void {
    this.refresh_customers();
  }

  refresh_customers() {
    this.customers = [];
    this.httpService.getCustomerList().subscribe(customers => {
        for (let customer of customers) {
          this.customers.push(customer)
        }
        this.dataSource = new MatTableDataSource<Customer>(this.customers);
        this.changeDetRefs.detectChanges();
      }
    );
  }
}
