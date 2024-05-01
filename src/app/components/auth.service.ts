import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "../../utils";
import { LoginI } from "../models/login.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { UserI } from "../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser$ = new BehaviorSubject<UserI | any>(null); // initializing with no user object since logged out

  constructor(private httpClient: HttpClient) {}

  login(data: LoginI): Observable<UserI> {
    return this.httpClient.post<UserI>(`${BASE_URL}/login`, data);
  }

  logout(){
    localStorage.clear();
  }

  // Método para 'setear' usuario actual
  setCurrentUser(data: any) {
    localStorage.setItem("currentUser", JSON.stringify(data));
    return this.currentUser$.asObservable();
  }

  // Método para 'parsear' objeto de usuario actual
  currentUser(data: any) {
    if (!data) {
      return null; // Devuelve null si el valor es null o undefined
    }
    return JSON.parse(data);
  }

  getEmail() {
    const email = localStorage.getItem("email");
    if (email) {
      return true;
    } else {
      return false;
    }
  }
}
