import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu.model';
import { menuItems } from '../data/menu-items.data';

@Component({
  selector: 'app-admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainAdminComponent {

  public menuItems: MenuItem[] = menuItems;

  constructor() {}
}
