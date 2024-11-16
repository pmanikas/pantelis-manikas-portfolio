import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() imageUrl: string = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() title: string = '';

  constructor() { }
}
