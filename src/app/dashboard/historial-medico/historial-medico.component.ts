import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faDownload, faEye, faExclamationTriangle, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-historial-medico',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, DataTablesModule],
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.css'
})

export class HistorialMedicoComponent implements OnInit {

  dtOptions: ADTSettings = {};
  dtOptionsDT: ADTSettings = {};
  dtOptionsM: ADTSettings = {};

  ngOnInit(): void {
    this.dtOptions = {
      columns: [
        {
          title: 'ID Cita',
          data: '',
        },
        {
          title: 'Fecha Cita',
          data: '',
        },
        {
          title: 'Hora Cita',
          data: '',
        },
        {
          title: 'Motivo - Tema',
          data: '',
        },
        {
          title: 'Especialista',
          data: '',
        }
      ]
    };

    this.dtOptionsDT = {
      columns: [
        {
          title: 'Id',
          data: '',
        },
        {
          title: 'Tema de Consulta',
          data: '',
        },
        {
          title: 'Descripción',
          data: '',
        },
        {
          title: 'Diagnostico',
          data: '',
        },
        {
          title: 'Fecha',
          data: '',
        },
        {
          title: 'Estado',
          data: '',
        }
      ]
    };

    this.dtOptionsM = {
      columns: [
        {
          title: 'ID Cita',
          data: '',
        },
        {
          title: 'Nombre Medicamento',
          data: '',
        },
        {
          title: 'Descripción',
          data: '',
        },
        {
          title: 'Indicaciones de Uso',
          data: '',
        },
        {
          title: 'Frecuencia (Horas)',
          data: '',
        },
        {
          title: 'Duración (Dias)',
          data: '',
        }
      ]
    };

  }

  // Iconos FontAwesome
  faDownload = faDownload;
  faEye = faEye;
  faExclamationTriangle = faExclamationTriangle;
  faUserCircle = faUserCircle;

}
