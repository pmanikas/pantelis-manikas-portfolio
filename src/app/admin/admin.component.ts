import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApppearanceService } from '../core/services/appearance.service';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit{

  constructor(
    public appearanceService: ApppearanceService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.closeMenuOnNavigation();
    this.getCurrentUserProfile();
  }

  private getCurrentUserProfile(): void {
    this.authService.getCurrentUserProfile().subscribe({
      next: (user) => {
        if (user) this.appearanceService.setCurrentUser(user);
      }
    });
  }

  private closeMenuOnNavigation() {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) this.appearanceService.hideAdminMenu();
      }
    });
  }
}
