import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCog, faGift, faHome, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "src/app/core/services/alert.service";
import { ApppearanceService } from "src/app/core/services/appearance.service";
import { AuthService } from "src/app/core/services/auth.service";
import { MenuItem } from "src/app/shared/models/menu.model";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})

export class SidebarComponent implements OnInit {
  public faHome = faHome;;
  public faStart = faStar;
  public faGift = faGift;
  public faUser = faUser;
  public faCog = faCog;

  menuItems: MenuItem[] = [
    {
      path: "/admin/dashboard",
      title: "Dashboard",
      icon: "coffee"
    },
    {
      path: "/admin/projects/list",
      title: "Projects",
      icon: "tasks"
    },
    {
      path: "/admin/services/list",
      title: "Services",
      icon: "cogs"
    },
    {
      path: "/admin/users/list",
      title: "Users",
      icon: "users"
    },
  ];

  public user: User | null = null;

  constructor(
    private router: Router,
    private alertService: AlertService,
    public authService: AuthService,
    public appearanceService: ApppearanceService
  ) {}

  ngOnInit(): void {
    this.getCurrentUserProfile();
  }

  public logoutHandler():void {
    this.authService.logout();
    this.alertService.success('Logged out');
    this.router.navigate(['/auth/login']);
  }

  private getCurrentUserProfile(): void {
    this.authService.getCurrentUserProfile().subscribe({
      next: (user) => {
        if (user) this.user = user;
      }
    });
  }
}
