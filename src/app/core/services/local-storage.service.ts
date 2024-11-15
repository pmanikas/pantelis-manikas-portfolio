import { Injectable } from '@angular/core';

const PREFIX = 'PM-';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {}

  public get(key: any): any {
    const item: any = localStorage.getItem(`${PREFIX}${key}`);
    return  item ? JSON.parse(item) : '';
  };

  public save(key:string, state: any) {
    window.localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(state))
  };

  public delete(key:string) {
    window.localStorage.removeItem(`${PREFIX}${key}`)
  };

  public clear() {
    window.localStorage.clear()
  };
}
