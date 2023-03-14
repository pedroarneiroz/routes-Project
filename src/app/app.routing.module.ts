import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//Pages
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';
import { PageErrorComponent } from "./pages/page-error/page-error.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'about', component: AboutComponent, children: [
    { path: ':id/:username', component: AboutComponent}
  ]},
  { path: 'dashboard',
  loadChildren: () =>  import('./dashboard/dashboard.module').then( m => m.DashboardModule) },

  { path: '404', component: PageErrorComponent},
  //Coringa Route
  { path: '**', redirectTo:'404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
