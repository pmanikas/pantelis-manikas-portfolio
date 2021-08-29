import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  isNavOpen: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(() => this.closeNav())
  }

  public toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  public closeNav(): void {
    this.isNavOpen = false;
  }

}
