import { SearchComponent } from './components/dashbord/search/search.component';
import { BrowseComponent } from './components/dashbord/browse/browse.component';
import { AddOfferComponent } from './components/dashbord/add-offer/add-offer.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashbordComponent},
  {path: 'create', component: AddOfferComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
