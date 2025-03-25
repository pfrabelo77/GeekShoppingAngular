import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { CookieService } from 'ngx-cookie-service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      // Obtém o token do cookie
      const token = this.cookieService.get('jwtToken');
  
      if (token) {
        // Clona a requisição adicionando o header Authorization
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        return next.handle(cloned);
      }
  
      return next.handle(req);
    }
  }
  