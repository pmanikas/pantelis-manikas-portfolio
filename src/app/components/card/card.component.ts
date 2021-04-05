import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() theme: string = 'transparent';
  @Input() title: string = '';
  @Input() details: string = '';
  @Input() link: string = '';
  @Input() bottomText: string = 'Find out more...';

  constructor() { }

  ngOnInit(): void {}

}
