import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isNavOpen: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(() => this.closeNav())
  }

  ngOnInit(): void {}

  public toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  public closeNav(): void {
    this.isNavOpen = false;
  }
}
