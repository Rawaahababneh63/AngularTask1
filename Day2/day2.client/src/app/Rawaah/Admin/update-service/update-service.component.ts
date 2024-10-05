import { Component } from '@angular/core';
import { UrlService } from '../../RwaaahURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent {
  ogOnInit() { }
  param: any
  imageFile:any
  changeimageevevnt(event: any) {
    this.imageFile = event.target.files[0]
  }
  constructor(private _ser: UrlService, private _active: ActivatedRoute) {
    this.param = this._active.snapshot.paramMap.get('id');
  }
  //الان بدي أجيب الid  من ال  url
  //   كيف رح اجيبه : بروح على كونستركتر بعرف  اندر سكوراكتيف
  //كولون اكتيفاتيد راوت بعدين بروح على الان جي ما بروح على الفنكشن نفسه  لانه بدي اعمل سناب شات بحيث اوخد الاي دي اول ما ادخل على الصفحة



  UpdateServiceAdmin(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key,data[key])
    }
    form.append("ServiceImage", this.imageFile)
    this._ser.UpdateService(this.param, form).subscribe((data) => {
      alert("Services Updated Sucessfully")
    })
  }
}

