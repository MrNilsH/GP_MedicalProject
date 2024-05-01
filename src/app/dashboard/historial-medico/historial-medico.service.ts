import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HistorialMedicoI } from "../../models/historial-medico.interface";
import { BASE_URL } from "../../../utils";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HistorialMedicoService {

  constructor(private httpClient:HttpClient) {}

  // Obtener citas por ID de paciente
  getHistorialMedicoPaciente(idPaciente: number): Observable<HistorialMedicoI[]> {
    return this.httpClient.get<HistorialMedicoI[]>(`${BASE_URL}/historialmedico/${idPaciente}`);
  }
}
