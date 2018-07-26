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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewAdvertisementComponent } from './new-advertisement/new-advertisement.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'mymatches', component: MatchesComponent, canActivate: [LoginGuard]},
  {path: 'match/:id', component: MatchDetailsComponent, canActivate: [LoginGuard]},
  {path: 'advertisements',component: RentAdsComponent,canActivate: [LoginGuard]},
  {path: 'advertisement/:id',component: RentAdDetailsComponent,canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: UserDetailsComponent, canActivate: [LoginGuard]},
  {path: 'myprofile', component: UserProfileComponent, canActivate: [LoginGuard]},
  {path: 'newadvertisement', component: NewAdvertisementComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
