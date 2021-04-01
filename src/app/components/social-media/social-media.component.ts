import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub, faNpm, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})

export class SocialMediaComponent implements OnInit {

  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faNpm = faNpm;
  public faInstagram = faInstagram;
  public faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void { }

}
