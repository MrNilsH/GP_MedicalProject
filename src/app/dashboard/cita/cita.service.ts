import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { CitaI } from '../../models/cita.interface';
import { BASE_URL } from "../../../utils";
import { UserI } from "../../models/user.interface";

@Injectable({
  providedIn: 'root'
})

export class CitasService {

  constructor(private http: HttpClient) {}

  // Obtener citas por ID de paciente
  getCitasPorPaciente(idPaciente: number): Observable<CitaI[]> {
    return this.http.get<CitaI[]>(`${BASE_URL}/cita/${idPaciente}`);
  }

   // Crear una nueva cita
  crearCita(cita: any): Observable<any> {
    return this.http.post<CitaI>(`${BASE_URL}/cita`, cita);
  }

  // Cancelar una cita existente
  cancelarCita(id_cita: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_cita: id_cita  // Envío del ID en el cuerpo
      }
    };

    return this.http.request('delete', `${BASE_URL}/cita`, options);
  }

}