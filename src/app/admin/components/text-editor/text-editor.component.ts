import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit, OnDestroy {
    @Input() html = '';
    @Input() isDisabled = false;
    @Output() htmlChange = new EventEmitter<string>();

    public editor: Editor | null = null;

    public toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    public onHtmlChange(html: string): void {
      this.htmlChange.emit(html);
    }

    ngOnInit(): void {
      this.editor = new Editor();
    }

    ngOnDestroy(): void {
      this.editor?.destroy();
    }
}
