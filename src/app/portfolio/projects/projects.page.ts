import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Project } from 'src/app/shared/models/project.model';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.scss'],
})

export class ProjectsPage implements OnInit {
    public projects: Project[] = [];
    public faGithub: any = faGithub;
    public isLoading: boolean = true;
    public selectedType: string = '';

    constructor(
        private projectsService: ProjectsService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {
        this.activeRoute.params.subscribe(params => {
            this.selectedType = params.category || '';
        });
    }

    ngOnInit(): void {
        this.getAllProjects();
    }

    private getAllProjects(): void {
        this.projectsService.getAll()
            .subscribe({
                next: (projects: Project[]) => {
                    this.projects = projects;
                    this.isLoading = false;
                },
                error: () => {
                    this.isLoading = false;
                }
            });
    }

    public updateType(type: string): void {
        console.log({type});

        this.router.navigate(['projects', type]);
    }
}
