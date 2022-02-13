import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ViewComponent} from './view/view.component';
import {DetailsComponent} from './details/details.component';
import {ProfilComponent} from './profil/profil.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { HomeFormComponent } from './home-form/home-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ViewComponent,
    DetailsComponent,
    ProfilComponent,
    HomeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //add hash aftter the url #
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
