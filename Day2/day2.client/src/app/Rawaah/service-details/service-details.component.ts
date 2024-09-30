import { Component } from '@angular/core';
import { UrlService } from '../RwaaahURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {


  parameter: any
  servicesDetailsArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getServicesDetails(this.parameter);
  }
  getServicesDetailsbyURL: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getServicesDetails(id: any) {
    this._ser.getServicesDetails(id).subscribe((data) => {
      this.getServicesDetailsbyURL = data
      console.log("this.getServicesDetailsbyURL", this.getServicesDetailsbyURL)
    })
  }
}
