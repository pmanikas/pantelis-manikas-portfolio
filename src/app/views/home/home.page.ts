import { Component, OnInit } from '@angular/core';
import { ServicesService } from "./../../services/services.service";
import Service from "./../../models/service.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

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
