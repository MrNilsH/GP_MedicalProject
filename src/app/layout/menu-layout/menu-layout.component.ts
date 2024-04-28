import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faHome, faSignOut, faCalendarCheck, faHistory, faUserCheck, faHandshakeAngle, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.css'
})

export class LayoutComponent {
  faHome = faHome; 
  faSignOut = faSignOut; 
  faCalendarCheck = faCalendarCheck; 
  faHistory = faHistory; 
  faUserCheck = faUserCheck; 
  faHandshakeAngle = faHandshakeAngle; 
  faUserCircle = faUserCircle; 
}
