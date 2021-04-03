import { Component, OnInit } from '@angular/core';
import { ServicesService } from "./../../services/services.service";
import Service from "./../../models/service.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

  services: Service[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  private getAllServices(): void {
    this.servicesService.getAll()
      .subscribe((projects: Service[]) => {
        this.services = projects;
      })
  }
}
