import { Component, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  faHome,
  faSignOut,
  faCalendarCheck,
  faHistory,
  faUserCheck,
  faHandshakeAngle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule, DOCUMENT } from "@angular/common";
import { AuthService } from "../../components/auth.service";
import { UserI } from "../../models/user.interface";

@Component({
  selector: "app-menu-layout",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: "./menu-layout.component.html",
  styleUrl: "./menu-layout.component.css",
})
export class LayoutComponent {
  faHome = faHome;
  faSignOut = faSignOut;
  faCalendarCheck = faCalendarCheck;
  faHistory = faHistory;
  faUserCheck = faUserCheck;
  faHandshakeAngle = faHandshakeAngle;
  faUserCircle = faUserCircle;

  currentUser: UserI | null | any = localStorage.getItem("currentUser");

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser(this.currentUser);
  }
}
