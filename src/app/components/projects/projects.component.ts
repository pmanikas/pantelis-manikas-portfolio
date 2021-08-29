import { Component, Input } from '@angular/core';
import Project from "./../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input() projects: Project[] = [];

  constructor() { }

}
