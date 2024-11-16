import { AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener, Component } from "@angular/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent  {
  @ViewChild('triggerEl') triggerEl!: ElementRef;
  @ViewChild('contentEl') contentEl!: ElementRef;

  isOpen = false;
  openUpward = false;
  dropdownTop: number | null = null;
  dropdownLeft: number | null = null;
  dropdownRight: number | null = null;


  constructor() {}

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.updateDropdownPosition();
  }

  public close() {
    this.isOpen = false;
  }

  private updateDropdownPosition() {
    const triggerRect = this.triggerEl.nativeElement.getBoundingClientRect();
    const contentRect = this.contentEl.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Check if there's more space below or above
    const spaceBelow = windowHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    this.openUpward = spaceBelow < contentRect.height && spaceAbove > spaceBelow;

    // Calculate vertical position
    if (this.openUpward) {
      this.dropdownTop = Math.max(12, triggerRect.top - contentRect.height);
    } else {
      this.dropdownTop = Math.min(triggerRect.bottom, windowHeight - contentRect.height - 12);
    }

    // Calculate horizontal position
    const idealLeft = triggerRect.left;
    const idealRight = windowWidth - triggerRect.right;

    // Check if dropdown would overflow right side
    if (idealLeft + contentRect.width > windowWidth - 12) {
      // Align to right side of trigger
      this.dropdownRight = idealRight;
      this.dropdownLeft = null;
    } else {
      // Align to left side of trigger
      this.dropdownLeft = idealLeft;
      this.dropdownRight = null;
    }
  }
}
