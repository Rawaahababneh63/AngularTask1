import { Component } from '@angular/core';
import { UrlService } from '../RwaaahURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private _ser: UrlService, private _router: Router) {




  }



  LoginUserCheck(data: any) {
    debugger
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.LoginUser(form).subscribe(() => {
      alert("Login is SucessFully")
      this._router.navigate(['/Services'])
    }),
      (error: any) => {
        alert(error.error)
      }

  }
}
