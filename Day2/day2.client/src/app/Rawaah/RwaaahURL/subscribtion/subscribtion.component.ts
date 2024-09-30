import { Component } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrl: './subscribtion.component.css'
})
export class SubscribtionComponent {

  ngOnInit() {
    this.getSubscribtionfromURLservices();
  }

  constructor(private _ser: UrlService) {




  }

  SubscriptionArray: any
  getSubscribtionfromURLservices() {
    this._ser.getSubscribtion().subscribe((data) => {
      this.SubscriptionArray = data
      console.log(this.SubscriptionArray, "SubscriptionArray");
    })

  }

  data = {
    "userId": 1,
    "subscriptionId": 0,
    "subServiceId":1
  }

  addUserSubcription(id: any) {
    this.data.subscriptionId = id;
    this._ser.addUserSubcription(this.data).subscribe(() => {
      alert("User Subsrciption  Add SucessFully")
    } )
  }
  }
