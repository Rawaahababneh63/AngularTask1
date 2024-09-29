import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CategoriesComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ImageDisplayComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([

      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Category", component: CategoriesComponent },
      { path: "About", component: AboutComponent },
      { path: "Product", component: ProductComponent },
      { path: "Contact", component: ContactComponent },
      { path: "Image", component: ImageDisplayComponent },
      { path: "Services", component: ServicesComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
