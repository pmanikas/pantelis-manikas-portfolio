import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApppearanceService {

  readonly $isAdminMenuVisible = new BehaviorSubject<boolean>(false);
  readonly $currentUser = new BehaviorSubject<User | null>(null);

  constructor() {}

  public toggleAdminMenu(): void {
    this.$isAdminMenuVisible.next(!this.$isAdminMenuVisible.value);
  }

  public hideAdminMenu(): void {
    this.$isAdminMenuVisible.next(false);
  }

  public showAdminMenu(): void {
    this.$isAdminMenuVisible.next(true);
  }

  public setCurrentUser(user: User): void {
    this.$currentUser.next(user);
  }
}
