import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Project } from 'src/app/shared/models/project.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})

export class ProjectsListComponent implements OnInit {
    public projects: Project[] = [];
    public isLoading: boolean = false;

    constructor(
        private projectsService: ProjectsService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll(): void {
        this.isLoading = true;
        this.projectsService.getAll()
            .subscribe({
                next: (projects: Project[]) => {
                    this.projects = projects;
                    this.isLoading = false;
                }
            })
    }

    public deleteHandler(project: Project): void {
        if (!confirm(`Are you sure you want to remove project ${project.title}?`)) return;
        this.projectsService.remove(project._id)
            .subscribe({
                next: () => {
                    this.deleteLocally(project._id);
                    this.alertService.success(`Project ${project.title} has been successfully removed`);
                }
            })
    }

    private deleteLocally(id: any): void {
        const projects = this.projects.filter(project => project._id !== id);
        this.projects = projects;
    }
}
