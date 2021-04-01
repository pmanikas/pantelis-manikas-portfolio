import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-resource',
  templateUrl: './image-resource.component.html',
  styleUrls: ['./image-resource.component.scss']
})


export class ImageResourceComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() lazy: boolean = true;

  public showImage: boolean = false;
  public placeholder: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2MMDQ39z8DAwMAIYwAAKgMD/9AXrvgAAAAASUVORK5CYII=';

  constructor() { }

  ngOnInit(): void {}

  public displayImage(): void {
    this.showImage = true;
  }
}
