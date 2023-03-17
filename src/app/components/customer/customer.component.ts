import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  current_customer?:any;
  firstFormGroup: FormGroup | any;

  constructor(private customerService: CustomerServiceService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.current_customer = this.customerService.customer$.getValue();
    this.firstFormGroup = this.fb.group({
      firstCtrl: [this.current_customer.first_name, Validators.required],
      lastCtrl: [this.current_customer.last_name, Validators.required]
    });
  }

}
