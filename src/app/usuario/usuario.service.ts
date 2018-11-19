import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { User } from '../shared/model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export class UserFiltro {
  nome: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usersUrl: string;

  //private users: User[];

  constructor(
      private http: HttpClient,
      private cookieService : CookieService 
  ) { 
    this.usersUrl = `${environment.apiUrl}/api/user`;
  }

  pesquisar(filtro: UserFiltro): Promise<any> {

    const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Authorization', this.cookieService.get('token'));
      
      return this.http.get<any>(`${this.usersUrl}/codigo/${filtro.id}`, { headers})
      .toPromise()
      .then(response => response);
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.usersUrl)
      .toPromise()
      .then(response => response);
  }

  
  adicionar(user: User): Promise<User> {

    return this.http.post<User>(this.usersUrl, user)
      .toPromise();
  }

  buscarPorCodigo(codigo: string): Promise<User> {
    return this.http.get<User>(`${this.usersUrl}/codigo/${codigo}`)
      .toPromise();
  }

}
