import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})

export class ServicesDetailsComponent implements OnInit {

  public service: Service = new Service();
  public submitted: boolean = false;
  public loading: boolean = false;
  public errorMessage: string = '';
  private id: string = "";
  public isLoading: boolean = false;

  constructor(
    private servicesService: ServicesService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.id = id;
    if(id === 'new') return;
    this.getById(id);
  }

  public submitHandler(): void {
    if(this.isLoading) return;
    if(this.id === 'new') this.addService(this.service)
    else this.editService(this.service)
  }

  private getById(id: string):void {
    this.servicesService.getById(id).subscribe({
      next: (service: Service) => this.service = service
    })
  }

  private addService(service: Service): void {
    this.isLoading = true;
    this.servicesService.add(service).subscribe({
      next: () => {
        this.isLoading = false;
        this.alertService.success('Service has been Added');
        this.router.navigate(['/admin/services/list']);
      }
    });
  }

  private editService(service: Service): void {
    this.isLoading = true;
    this.servicesService.edit(service).subscribe({
      next:(service: Service) => {
        this.isLoading = false;
        this.service = service;
        this.alertService.success('Service has been Edited');
      }
    });
  }
}
