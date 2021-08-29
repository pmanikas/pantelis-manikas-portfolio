import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-image-resource',
  templateUrl: './image-resource.component.html',
  styleUrls: ['./image-resource.component.scss']
})

export class ImageResourceComponent {

  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() lazy: boolean = true;

  public showImage: boolean = false;

  constructor() { }

  public displayImage(): void {
    this.showImage = true;
  }

}
