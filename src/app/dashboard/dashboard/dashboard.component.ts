import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { UserI } from "../../models/user.interface";
import { AuthService } from "../../components/auth.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
  currentUser: UserI | null | any = localStorage.getItem("currentUser");

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser(this.currentUser);
  }
}
