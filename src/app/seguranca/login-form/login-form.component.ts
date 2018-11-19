import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginDTO } from 'src/app/shared/model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

   login(login: string, senha: string) {
    return this.loginService.login(login, senha);
  }

}
