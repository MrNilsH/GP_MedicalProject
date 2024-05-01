import { Component, Inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  faDownload,
  faEye,
  faExclamationTriangle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ADTSettings } from "angular-datatables/src/models/settings";
import { DataTablesModule } from "angular-datatables";
import { AuthService } from "../../components/auth.service";
import { UserI } from "../../models/user.interface";
import { CommonModule, DOCUMENT } from "@angular/common";
import { HistorialMedicoService } from "./historial-medico.service";
import { HistorialMedicoI } from "../../models/historial-medico.interface";

@Component({
  selector: "app-historial-medico",
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, DataTablesModule, CommonModule],
  templateUrl: "./historial-medico.component.html",
  styleUrl: "./historial-medico.component.css",
})
export class HistorialMedicoComponent implements OnInit {
  dtOptions: ADTSettings = {};
  dtOptionsDT: ADTSettings = {};
  dtOptionsM: ADTSettings = {};

  historial: HistorialMedicoI[] = [];
  currentUser: UserI | null | any = localStorage.getItem("currentUser");

  constructor(
    public authService: AuthService,
    private historialMedicoService:HistorialMedicoService
  ) {
    this.currentUser = this.authService.currentUser(this.currentUser);
  }


  ngOnInit(): void {
    this.historialMedicoService.getHistorialMedicoPaciente(this.currentUser.id_paciente).subscribe(res => {
      this.historial = res;
    })

  }

  // Iconos FontAwesome
  faDownload = faDownload;
  faEye = faEye;
  faExclamationTriangle = faExclamationTriangle;
  faUserCircle = faUserCircle;
}
