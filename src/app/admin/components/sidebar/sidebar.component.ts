import { Component, Input } from "@angular/core";
import { MenuItem } from "src/app/shared/models/menu.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})

export class SidebarComponent {

  @Input() menuItems: MenuItem[] = [];

  constructor() {}

}
