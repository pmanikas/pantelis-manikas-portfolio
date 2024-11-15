import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ElementRef,
} from '@angular/core';

enum DRAG_STATE {
  ON,
  OFF,
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})

export class ImageUploadComponent implements OnInit, OnDestroy {

  DRAG_STATE = DRAG_STATE;
  dragState: DRAG_STATE = DRAG_STATE.OFF;

  @Input() src: string = '';
  @Output() imageLoaded = new EventEmitter();

  constructor(private ref: ElementRef) {}

  ngOnInit(): void {
    this.ref.nativeElement.addEventListener(
      'dragenter',
      this.dragEnterHandler,
      false
    );
    this.ref.nativeElement.addEventListener(
      'dragover',
      this.dragOverHandler,
      false
    );
    this.ref.nativeElement.addEventListener('drop', this.dropHandler, false);
  }

  ngOnDestroy(): void {
    this.ref.nativeElement.removeEventListener(
      'dragenter',
      this.dragEnterHandler
    );
    this.ref.nativeElement.removeEventListener(
      'dragover',
      this.dragOverHandler
    );
    this.ref.nativeElement.removeEventListener('drop', this.dropHandler);
  }

  public onChange(event: Event | any) {
    const files: any = event.target.files || [];
    this.readFile(files);
  }

  private dragEnterHandler = () => (this.dragState = DRAG_STATE.ON);

  private dragOverHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    this.dragState = DRAG_STATE.ON;
  };

  private dropHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.readFile(e.dataTransfer.files);
    this.dragState = DRAG_STATE.OFF;
  };

  private readFile(files: File[]) {
    if (files.length === 0) return;
    const file: File = files[0];
    const mimeType: string = file.type;
    if (mimeType.match(/image\/*/) === null) return;

    let formData: FormData = new FormData();
    formData.append("image", file, file.name);
    this.imageLoaded.emit(formData);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      this.src = result;
    };
  }

}
