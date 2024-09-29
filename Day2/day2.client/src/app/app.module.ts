import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Rawaah/nav-bar/nav-bar.component';
import { HomeComponent } from './Rawaah/home/home.component';
import { ServicesComponent } from './Rawaah/services/services.component';
import { SubServicesComponent } from './Rawaah/sub-services/sub-services.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServicesComponent,
    SubServicesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Services", component: ServicesComponent },
      { path: "SubServices/:id", component: SubServicesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
