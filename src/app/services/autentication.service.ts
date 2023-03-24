import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/app/environment';
import { User } from 'src/app/helpers/shared';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor( private router: Router, private http: HttpClient ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
      return this.http.post<any>(environment.apiUrl + 'login', {
        username: username,
        password: password
      })
            .pipe(map(user => {
                console.log(user)
                localStorage.setItem('user', JSON.stringify(user))
                this.userSubject.next(user);
            //    this.startRefreshTokenTimer();
                return user;
            }));
    }

    registration(username: string, password: string, confirmPassword: string){
      return this.http.post<any>(environment.apiUrl + 'registration', {
        username: username,
        password: password,
        confirmPassword: confirmPassword
      })
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
