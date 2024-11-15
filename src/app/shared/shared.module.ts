import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ImageResourceComponent } from './components/image-resource/image-resource.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DeferLoadDirective } from './directives/defer-load.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

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
    DeferLoadDirective
  ],
  exports: [
    ButtonComponent,
    ImageResourceComponent,
    CardComponent,
    LoaderComponent,
    DeferLoadDirective
  ]
})
export class SharedModule { }
