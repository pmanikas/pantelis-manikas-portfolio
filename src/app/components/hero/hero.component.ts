import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public imageUrl: string = '/assets/images/pantelis-manikas-anime.jpg';

  constructor() { }

  ngOnInit(): void {}
}
