import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MedicamentoI } from "../../models/medicamento.interface";
import { BASE_URL } from "../../../utils";
import { Observable } from "rxjs";
import { EnfermedadI } from "../../models/enfermedad.interface";

@Injectable({
  providedIn: "root",
})
export class AutorizacionesService {
  constructor(private http: HttpClient) {}

  // Obtener medicamentos por ID de paciente
  getMedicamentosPorPaciente(idPaciente: number): Observable<MedicamentoI[]> {
    return this.http.get<MedicamentoI[]>(
      `${BASE_URL}/medicamentos/${idPaciente}`
    );
  }

  // Obtener enfermedades por ID de paciente
  getEnfermedadesPorPaciente(idPaciente: number): Observable<EnfermedadI[]> {
    return this.http.get<EnfermedadI[]>(
      `${BASE_URL}/enfermedades/${idPaciente}`
    );
  }
}
