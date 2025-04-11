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

  // user: User = {
  //   username: "admin",
  //   password: "123456",
  //   role: "admins"
  // };

  //* Usuário sem permissão de Deletar produto */
  user: User = {
    username: "operador01",
    password: "123456",
    role: "operadores"
  };

 
  login() {
    return this.http.post<{ token: string }>(this.url + 'login', JSON.stringify(this.user), this.httpOptions).subscribe({
      next: (response) => {
        const token = response.token;

        // Armazena o token no cookie com tempo de expiração de 15 minutos
        const agora = new Date();
        const expiraEm15Min = new Date(agora.getTime() + 5 * 60 * 1000); // 15 min em ms
        this.cookieService.set('jwtToken', token, expiraEm15Min, '/', '', true, 'Strict');
      },
      error: (err) => console.error('Erro ao autenticar:', err),
    });
  }

  logout() {
    this.cookieService.delete('jwtToken');
    localStorage.removeItem('usuarioLogado');
  }
  isLoggedIn(): boolean {
    const jwtTokenExists: boolean = this.cookieService.check('jwtToken');
    //const usuarioLogadoExists: boolean = !!localStorage.getItem('usuarioLogado');
    return jwtTokenExists;
  }

  setUsuarioLogado(usuarioLogado: User) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
  }
  getUsuarioLogado(): User | null {
    const userString = localStorage.getItem('usuarioLogado');
    return userString ? JSON.parse(userString) as User : null;
  }

  getUserRole(): string | null {
    const token = this.cookieService.get('jwtToken');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }
}
