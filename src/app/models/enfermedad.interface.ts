export interface EnfermedadI {
    id_enfermedad: number;
    diagnostico:   string;
    fecha:         Date;
    descripcion:   string;
    estado:        string;
    id_paciente:   number;
}