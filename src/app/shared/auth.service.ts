import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { User } from 'src/app/shared/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiUrlProdutos; //URL api DEV carregada do environment.ts 'https://localhost:7184/api/Produto/'

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  user: User = {
    username: "admin",
    password: "123456",
    role: "admins"
  };

  //* Usuário sem permissão de Deletar produto */
  // user: User = {
  //   username: "operador01",
  //   password: "123456",
  //   role: "operadores"
  // };

 
  login() {
    return this.http.post<{ token: string }>(this.url + 'login', JSON.stringify(this.user), this.httpOptions).subscribe({
      next: (response) => {
        const token = response.token;

        // Armazena o token no cookie com tempo de expiração de 1 hora
        this.cookieService.set('jwtToken', token, 1, '/', '', true, 'Strict');
      },
      error: (err) => console.error('Erro ao autenticar:', err),
    });
  }
}
