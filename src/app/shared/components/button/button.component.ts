import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent {
  @Input() theme: string = 'transparent';
  @Input() size: string = 'small';
  @Input() link: string | string[] = '';

  constructor() {}
}
