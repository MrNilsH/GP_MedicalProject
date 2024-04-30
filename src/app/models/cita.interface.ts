export interface CitaI {
    id_cita: number,
    fecha: Date,
    hora: string,
    motivo: string,
    estado: string,
    id_paciente: 1,
    id_especialista: number
  }