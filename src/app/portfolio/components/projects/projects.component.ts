import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnChanges {

    @Input() projects: Project[] = [];
    @Input() shouldFilterByType: boolean = false;
    @Input() selectedType: string = '';

    @Output() updateType: EventEmitter<string> = new EventEmitter<string>();

    public filteredProjects: Project[] = [];
    public types: Set<string> = new Set();

    constructor() { }

    ngOnChanges(): void {
        if (this.projects.length > 0) {
            this.grabTypes();
            this.filterByType(this.selectedType);
        }
    }

    private grabTypes(): void {
        this.projects.forEach(project => {
            this.types.add(project.type);
        });
    }

    public filterByType(type: string): void {
        this.selectedType = type;

        if(!type || !this.shouldFilterByType) {
            this.filteredProjects = this.projects;
            return;
        }

        this.filteredProjects = this.projects.filter(project => project.type === type);
    }

    public onTypeSelect(type: string): void {
        this.updateType.emit(type);
    }
}
