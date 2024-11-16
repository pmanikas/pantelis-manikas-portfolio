import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApppearanceService {

  public $isAdminMenuVisible = new BehaviorSubject<boolean>(false);

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
}
