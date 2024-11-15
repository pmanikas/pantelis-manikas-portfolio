import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  public ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return;
    }

    // check for invitation token
    const passwordResetToken = this.route.snapshot.queryParams['token'];
    const id = this.route.snapshot.queryParams['members_id'];

    if (!!id && !!passwordResetToken) {
      this.localStorageService.save('tmpToken', passwordResetToken);
    } else {
      this.router.navigate(['/admin/auth/login']);
    }
  }

}
