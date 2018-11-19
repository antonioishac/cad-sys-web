import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { HttpClient, HttpParams } from '@angular/common/http';
import { User, LoginDTO } from 'src/app/shared/model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginParam: LoginDTO;
  
  constructor(
      private http: HttpClient,
      private cookieService : CookieService,
      private router: Router
  ) { }

  login(email: string, password: string) {

    let urlLogin = `${environment.apiUrl}/api/user/login`;

    this.loginParam = new LoginDTO;
    this.loginParam.email = email;
    this.loginParam.password = password;

    const urlHome = sessionStorage.getItem('/home');
    
    this.http.post<User>(urlLogin, this.loginParam)
      .subscribe(
        (val) => {
          console.log("guardando o token do usuario logado no cookie", val.token);
          this.cookieService.set('token', val.token);

          console.log('cookie obtido');
          console.log(this.cookieService.get('token'));

          this.router.navigate(['/home']);
        },
        response => {
          console.log("POST call in error", response);
        });
   }


   /* httpPostExample() {

    this.http.post("/courses/-KgVwECOnlc-LHb_B0cQ.json",
        {
            "courseListIcon": "...",
            "description": "TEST",
            "iconUrl": "..",
            "longDescription": "...",
            "url": "new-url"
        })
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    } */
}
