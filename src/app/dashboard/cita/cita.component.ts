import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {faCalendarDays, faCheckCircle, faCancel, faEdit, faClock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ADTSettings } from "angular-datatables/src/models/settings";
import { DataTablesModule } from "angular-datatables";
import { CitasService } from "./cita.service";
import { UserI } from "../../models/user.interface";
import { CitaI } from "../../models/cita.interface";
import { AuthService } from "../../components/auth.service";
import { CommonModule } from '@angular/common';
import { Subject } from "rxjs";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, DataTablesModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css',
  providers: [CitasService]
})

export class CitaComponent implements OnInit {
  citas: any | CitaI = [];
  dtOptions: ADTSettings = {};
  currentUser: UserI | null | any = localStorage.getItem("currentUser");
  dtTrigger: Subject<any> = new Subject<any>();
  citasForm!: FormGroup;


  constructor(private citasService: CitasService, private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.currentUser(this.currentUser);
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
    };

    this.cargarCitasDelPaciente();

    this.citasForm = new FormGroup({
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      estado: new FormControl('programada'),
      id_paciente: new FormControl(this.currentUser.id_paciente),
      id_especialista: new FormControl('1')
    });

  }

  reloadComponent() {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }

  cargarCitasDelPaciente(): void {
    this.citasService.getCitasPorPaciente(this.currentUser.id_paciente).subscribe(citas => {
      this.citas = citas;

      setTimeout(() => this.dtTrigger.next(this.citas), 50);

    }, (error: any) => {
      console.error('Error al obtener las citas:', error);
    });
  }

  createItem() {
    if (this.citasForm.valid) {
      this.citasService.crearCita(this.citasForm.value).subscribe({
        next: (response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: response,
            showConfirmButton: false,
            timer: 1500
          });
          this.reloadComponent();
        },
        error: (error) => {
          console.error('Error al crear el item:', error);
        }
      });
    }
  }

  confirmCancelarCita(id: number){
    Swal.fire({
      title: "¿Está seguro de cancelar la programación de esta cita medica?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.cancelarCita(id);
      }
    });
  }

  cancelarCita(id: number) {
    this.citasService.cancelarCita(id).subscribe({
      next: () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se cancelo correctamente su cita",
          showConfirmButton: false,
          timer: 1500
        });
        this.reloadComponent();
      },
      error: (error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "¡Error al cancelar la cita!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

 
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  
  // Iconos FontAwesome
  faCalendarDays = faCalendarDays;
  faCheckCircle = faCheckCircle;
  faCancel = faCancel;
  faEdit = faEdit;
  faClock = faClock;

}
