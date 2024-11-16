import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ImageResourceComponent } from './components/image-resource/image-resource.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DeferLoadDirective } from './directives/defer-load.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { IconComponent } from './components/icon/icon.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
    ButtonComponent,
    ImageResourceComponent,
    CardComponent,
    LoaderComponent,
    LogoComponent,
    SeparatorComponent,
    IconComponent,
    DropdownComponent,
    DeferLoadDirective,
    ClickOutsideDirective,
    AvatarComponent
  ],
  exports: [
    ButtonComponent,
    ImageResourceComponent,
    CardComponent,
    LoaderComponent,
    LogoComponent,
    SeparatorComponent,
    IconComponent,
    DropdownComponent,
    AvatarComponent,
    DeferLoadDirective,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
