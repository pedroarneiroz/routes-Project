import { NgModule } from "@angular/core";
import { RouterModule, Route, Routes } from "@angular/router";
//Pages
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { PageErrorComponent } from "./page-error/page-error.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: '404', component: PageErrorComponent},
  //Coringa Route
  { path: '**', redirectTo:'404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
