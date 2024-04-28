import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-historial-medico',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.css'
})

export class HistorialMedicoComponent {
  faUserCircle = faUserCircle;
}
