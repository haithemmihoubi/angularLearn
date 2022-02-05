import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ViewComponent} from "./view/view.component";
import {DetailsComponent} from "./details/details.component";
import {ProfilComponent} from "./profil/profil.component";
import {GuardAdminGuard} from "./guards/guard-admin.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, canActivate: [GuardAdminGuard]},
  //{path: 'profile', component: ProfileComponent},
  {path: 'contact', redirectTo: 'about', pathMatch: 'full'},
  // route for a 404 page
  //{path: "**", component: PageNotFoundComponent},
  //children routes
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[GuardAdminGuard]
  },//children routes
  {
    path: 'profil',

    children: [
      {path: 'view/:name', component: ViewComponent},
      {path: 'details', component: DetailsComponent},
    ]
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
