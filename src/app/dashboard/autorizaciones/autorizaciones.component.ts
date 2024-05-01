import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DataTablesModule } from "angular-datatables";
import {
  faCalendarDays,
  faCheckCircle,
  faCancel,
  faEdit,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { AutorizacionesService } from "./autorizaciones.service";
import { AuthService } from "../../components/auth.service";
import { UserI } from "../../models/user.interface";
import { ADTSettings } from "angular-datatables/src/models/settings";
import { MedicamentoI } from "../../models/medicamento.interface";
import { Subject } from "rxjs";
import { EnfermedadI } from "../../models/enfermedad.interface";

@Component({
  selector: "app-autorizaciones",
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    DataTablesModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./autorizaciones.component.html",
  styleUrl: "./autorizaciones.component.css",
  providers: [AutorizacionesService]
})
export class AutorizacionesComponent implements OnInit {
  currentUser: UserI | null | any = localStorage.getItem("currentUser");
  dtOptions: ADTSettings = {};
  dtOptions2: ADTSettings = {};
  medicamentos: MedicamentoI[] = [];
  enfermedades: EnfermedadI[] = [];

  dtTrigger: Subject<any> = new Subject<any>();
  dtTrigger2: Subject<any> = new Subject<any>();

  constructor(
    private autorizacionService: AutorizacionesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.currentUser(this.currentUser);
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
    };

    this.getMedicamentos();
    this.getEnfermedades();

  }

  getMedicamentos(): void {
    this.autorizacionService.getMedicamentosPorPaciente(this.currentUser.id_paciente).subscribe(medicamentos => {
      this.medicamentos = medicamentos;

      setTimeout(() => this.dtTrigger.next(this.medicamentos), 50);

    }, (error: any) => {
      console.error('Error al obtener las citas:', error);
    });
  }

  getEnfermedades(): void {
    this.autorizacionService.getEnfermedadesPorPaciente(this.currentUser.id_paciente).subscribe(enfermedades => {
      this.enfermedades = enfermedades;
      
      setTimeout(() => this.dtTrigger2.next(this.enfermedades), 50);

    }, (error: any) => {
      console.error('Error al obtener las citas:', error);
    });
  }

  // Iconos FontAwesome
  faCalendarDays = faCalendarDays;
  faCheckCircle = faCheckCircle;
  faCancel = faCancel;
  faEdit = faEdit;
  faClock = faClock;
}
