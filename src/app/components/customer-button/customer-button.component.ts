import {Component, Input} from '@angular/core';
import {Customer} from "../../helpers/shared";
import {CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-customer-button',
  templateUrl: './customer-button.component.html',
  styleUrls: ['./customer-button.component.css']
})
export class CustomerButtonComponent {

  constructor(private customerService: CustomerServiceService) {
  }
  @Input() customer?: Customer;

  onClick() {
    console.log(this.customer);
    this.customerService.setCustomer(this.customer!);
  }
}
