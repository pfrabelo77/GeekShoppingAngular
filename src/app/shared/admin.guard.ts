import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.getUserRole() !== 'admins') {
      this.router.navigate(['/user/unauthorized']);
      return false;
    }
    return true;
  }
}