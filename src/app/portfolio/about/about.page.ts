import { Component } from '@angular/core';
import copies from './../../shared/data/copies';

@Component({
    selector: 'app-about-page',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss']
})

export class AboutPage {

    public isVisible = false;

    public about: string = copies.ABOUT;

    constructor() { }

}
