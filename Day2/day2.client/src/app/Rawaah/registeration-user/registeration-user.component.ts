import { Component } from '@angular/core';
import { UrlService } from '../RwaaahURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration-user',
  templateUrl: './registeration-user.component.html',
  styleUrl: './registeration-user.component.css'
})
export class RegisterationUserComponent {
  ngOnInit() {

  }


  constructor(private _ser: UrlService, private _router: Router) {




  }

  addUser(data:any) {
   
      var form = new FormData();
      for (let key in data) {
        form.append(key, data[key])
      }
    this._ser.addUser(form).subscribe(() => {
      alert("User  Add SucessFully")
      this._router.navigate(['/Login'])
    }),
      (error:any) => {
        alert(error.error)
      }

  }
}
