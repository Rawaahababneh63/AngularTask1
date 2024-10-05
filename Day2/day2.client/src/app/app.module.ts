import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Rawaah/nav-bar/nav-bar.component';
import { HomeComponent } from './Rawaah/home/home.component';
import { ServicesComponent } from './Rawaah/services/services.component';
import { SubServicesComponent } from './Rawaah/sub-services/sub-services.component';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { LectureComponent } from './Rawaah/RwaaahURL/lecture/lecture.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubscribtionComponent } from './Rawaah/RwaaahURL/subscribtion/subscribtion.component';
import { ServiceDetailsComponent } from './Rawaah/service-details/service-details.component';
import { RegisterationUserComponent } from './Rawaah/registeration-user/registeration-user.component';
import { LoginComponent } from './Rawaah/login/login.component';
import { DashboardComponent } from './Rawaah/Admin/dashboard/dashboard.component';
import { AddServiceComponent } from './Rawaah/Admin/add-service/add-service.component';
import { GetServicesAdminComponent } from './Rawaah/Admin/dashboard/get-services-admin/get-services-admin.component';
import { UpdateServiceComponent } from './Rawaah/Admin/update-service/update-service.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServicesComponent,
    SubServicesComponent,
    LectureComponent,
    SubscribtionComponent,
    ServiceDetailsComponent,
    RegisterationUserComponent,
    LoginComponent,
    DashboardComponent,
    AddServiceComponent,
    GetServicesAdminComponent,
    UpdateServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServicesComponent },
      { path: "lecture", component: LectureComponent },
      { path: "Subscribtion", component: SubscribtionComponent },
      { path: "Service-Details/:id", component: ServiceDetailsComponent },
      { path: "Registration", component: RegisterationUserComponent },
      { path: "Login", component: LoginComponent },
      {
        path: "Dashboard", component: DashboardComponent,
        children: [{ path: "AddService", component: AddServiceComponent }, { path: "getServiceAdmin", component: GetServicesAdminComponent }, { path: "UpdateService/:id", component: UpdateServiceComponent }
]
      },
     

  ]
    )],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
