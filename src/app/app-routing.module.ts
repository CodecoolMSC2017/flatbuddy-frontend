import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {MatchesComponent} from './matches/matches.component'
import {MatchDetailsComponent} from './match-details/match-details.component'
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import {RentAdsComponent} from './rent-ads/rent-ads.component';
import { RentAdDetailsComponent } from './rent-ad-details/rent-ad-details.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'mymatches', component: MatchesComponent, canActivate: [LoginGuard]},
  {path: 'match/:id', component: MatchDetailsComponent},
  {path: 'advertisements',component: RentAdsComponent,canActivate: [LoginGuard]},
  {path: 'advertisement/:id',component: RentAdDetailsComponent,canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: UserDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
