import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el usuario está autenticado
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return true; // Permitir acceso si hay un usuario autenticado
    } else {
      // Redirigir a la página de inicio de sesión si no hay usuario autenticado
      this.router.navigate(['/']);
      return false;
    }
  }
}
