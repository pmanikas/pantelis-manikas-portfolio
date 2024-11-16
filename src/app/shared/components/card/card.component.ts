import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() theme: string = 'transparent'; // primary, secondary, primary-inverted, secondary-inverted, transparent
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() bottomText: string = '';

  constructor() { }
}
