import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "src/app/core/services/alert.service";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent {

  constructor(
    private router: Router,
    public authService: AuthService,
    private alertService: AlertService
  ) {}

  public logoutHandler():void {
    this.authService.logout();
    this.alertService.success('Logged out');
    this.router.navigate(['/auth/login']);
  }
}
