import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from 'src/app/shared/models/service.model';

@Component({
    selector: 'app-services',
    templateUrl: './services-list.component.html',
    styleUrls: ['./services-list.component.scss']
})

export class ServicesListComponent implements OnInit {
    public services: Service[] = [];
    public isLoading: boolean = false;

    constructor(
        private servicesService: ServicesService,
        private alertService: AlertService
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    private getAll(): void {
        this.isLoading = true;
        this.servicesService.getAll()
            .subscribe({
                next: (services: Service[]) => {
                    this.services = services;
                    this.isLoading = false;
                }
            })
    }

    public deleteHandler(service: Service): void {
        if (!confirm(`Are you sure you want to remove service ${service.title}?`)) return;

        this.servicesService.remove(service._id)
            .subscribe({
                next: () => {
                    this.deleteLocally(service._id);
                    this.alertService.success('Service has been removed');
                }
            })
    }

    private deleteLocally(id: any): void {
        const services = this.services.filter(service => service._id !== id);
        this.services = services;
    }
}
