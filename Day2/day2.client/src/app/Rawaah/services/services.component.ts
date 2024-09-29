import { Component } from '@angular/core';
import { UrlService } from '../RwaaahURL/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {

    this.getServices();
  }
  constructor(private _ser: UrlService) {


  }

  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")
    })

  }
}
