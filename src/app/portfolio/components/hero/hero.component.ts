import { Component } from '@angular/core';
import copies from './../../../shared/data/copies';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public imageUrl: string = '/assets/images/pantelis-manikas-black-and-white.webp';

  public about: string = copies.ABOUT;

  constructor() { }

}
