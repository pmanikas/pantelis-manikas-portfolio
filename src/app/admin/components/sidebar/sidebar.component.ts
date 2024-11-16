import { Component, Input } from "@angular/core";
import { faCog, faHome, faTasks, faUser } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "src/app/shared/models/menu.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})

export class SidebarComponent {

  public faHome = faHome;
  public faTask = faTasks;
  public faCog = faCog;
  public faUser = faUser;

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

  constructor() {}

}
