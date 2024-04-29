import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserI } from "../../models/user.interface";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "../global-auth-form-style.css",
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private authService: AuthService, private route: Router) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  login() {
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe((res) => {
      console.log(res);
      if(res.error) {
        Swal.fire({
          icon: 'error',
          title: '<b>Error en autenticación</b>',
          text: 'Email o contraseña incorrectos. Inténtelo nuevamente, por favor.',
          confirmButtonText: '<b>Entendido</b>',
          confirmButtonColor: '#396172'
        })
      } else {
        this.authService.setCurrentUser(res);
        this.route.navigate(["/dashboard"]);
        Swal.fire({
          icon: "success",
          title: `<b>Bienvenido, ${res.nombre}</b>`,
          confirmButtonText: "<b>Entendido</b>",
          confirmButtonColor: "#396172",
        });
      }
    });
  }
}
