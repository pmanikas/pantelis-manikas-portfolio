import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApppearanceService } from '../core/services/appearance.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit{

  constructor(
    public appearanceService: ApppearanceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.closeMenuOnNavigation();
  }

  private closeMenuOnNavigation() {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) this.appearanceService.hideAdminMenu();
      }
    });
  }
}
