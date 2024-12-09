import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit, OnDestroy {
    private id = '';
    private subscriptions: Subscription[] = [];
    public isLoading = false;
    public project: Project | null = null;
    public iframeWidth = 0;
    public iframeHeight = 0;

    constructor(
        private route: ActivatedRoute,
        private projectService: ProjectsService
    ) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
        this.getProject();
    }

    private getProject() {
        this.isLoading = true;
        this.subscriptions.push(
            this.projectService.getById(this.id).subscribe(
                (project: Project) => {
                    this.project = project;
                    this.isLoading = false;
                },
                (_error: any) => {
                    this.isLoading = false;
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
