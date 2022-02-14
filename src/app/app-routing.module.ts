import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";
import {ViewComponent} from "./view/view.component";
import {DetailsComponent} from "./details/details.component";
import {GuardAdminGuard} from "./guards/guard-admin.guard";
import {HomeFormComponent} from "./home-form/home-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: HomeFormComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'about', component: AboutComponent, canActivate: [GuardAdminGuard]},
  //{path: 'profile', component: ProfileComponent},
  {path: 'contact', redirectTo: 'about', pathMatch: 'full'},
  // route for a 404 page
  //{path: "**", component: PageNotFoundComponent},
  //children routes
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [GuardAdminGuard]
  },
  {
    path: 'profil',
    children: [
      {path: 'view/:name', component: ViewComponent},
      {path: 'details', component: DetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
