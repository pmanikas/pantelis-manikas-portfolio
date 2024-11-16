import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit {
  public title: string = "";

  constructor(
    private router: Router,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentRouteTitle();
    this.chechForRouteChange();
  }

  private getCurrentRouteTitle() {
    this.activatedRoute.firstChild?.data.subscribe(data => {
      this.title = data.title || "?";
    });
  }

  private chechForRouteChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe({
        next: () => this.getCurrentRouteTitle()
      });
  }
}
