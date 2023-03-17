import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/autentication.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  regForm!: FormGroup;
  loading = false;
  error = "";

  constructor(private authService: AuthenticationService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.regForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      });
  }

  onSubmit(){
    if (this.regForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.registration(
      this.regForm.value.username,
      this.regForm.value.password,
      this.regForm.value.confirmPassword
    ).pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });


  }



}
