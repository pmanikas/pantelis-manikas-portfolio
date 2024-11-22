import { Component, OnInit } from '@angular/core';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Project } from 'src/app/shared/models/project.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { forkJoin, Observable } from 'rxjs';

@Component({
    selector: 'app-projects',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})

export class ProjectsListComponent implements OnInit {
    public projects: Project[] = [];
    public previousProjects: Project[] = [];

    public isLoading: boolean = false;

    public faGrip = faGripVertical;

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

    private updateItemsOrder(projects: Project[]): Project[] {
        return projects.map((project, index) => {
            project.order = index + 1;
            return project;
        });
    }

    private updateProject(project: Project): Observable<Project> {
        return this.projectsService.edit(project);
    }

    private updateProjectsOnServer(projects: Project[]): void {
        const requests = projects.map(project => this.updateProject(project));
        this.isLoading = true;

        forkJoin(requests)
            .subscribe({
                next: () => {
                    this.isLoading = false;
                    this.alertService.success('Projects have been successfully reordered');
                }
            })
    }

    public drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
        this.projects = this.updateItemsOrder(this.projects);
        this.updateProjectsOnServer(this.projects);
    }
}
