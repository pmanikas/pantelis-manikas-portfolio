import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public imageUrl: string = '/assets/images/pantelis-manikas-black-and-white.jpg';

  constructor() { }

}
