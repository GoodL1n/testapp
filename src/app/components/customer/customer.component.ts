import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../services/customer-service.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {HttpServiceService} from "../../services/http-service.service";
import {Address} from "../../helpers/shared";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {first} from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  current_customer?:any;
  firstFormGroup: FormGroup | any;
  date: FormControl | any;

  constructor(private customerService: CustomerServiceService,
              private httpService: HttpServiceService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.current_customer = this.customerService.customer$.getValue();
    this.firstFormGroup = this.fb.group({
      firstCtrl: [this.current_customer.first_name, Validators.required],
      lastCtrl: [this.current_customer.last_name, Validators.required],
      emailCtrl: [this.current_customer.email, Validators.required],
      date: [this.current_customer.create_date, Validators.required]
    });
    this.date = new FormControl(this.current_customer.create_date);
  }

  onSubmit() {
    this.current_customer.first_name = this.firstFormGroup.controls.firstCtrl.value
    this.current_customer.last_name = this.firstFormGroup.controls.lastCtrl.value
    this.current_customer.email = this.firstFormGroup.controls.emailCtrl.value
    this.current_customer.create_date = this.firstFormGroup.controls.date.value
    console.log(JSON.stringify(this.current_customer))
    this.httpService.updateCustomer(this.current_customer)
      .pipe(first())
      .subscribe(cur => {
        this.router.navigateByUrl('/')
    }, error => {
      console.log(error)
    })
  }
}
