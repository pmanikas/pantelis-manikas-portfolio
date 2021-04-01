import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})


export class ButtonComponent implements OnInit {
  @Input() theme: string = 'transparent';
  @Input() size: string = 'small';

  constructor() {}

  ngOnInit(): void {}
}
