import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {MatchesComponent} from './matches/matches.component'
import {MatchDetailsComponent} from './match-details/match-details.component'
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import {MatchesComponent} from './matches/matches.component';
import {MatchDetailsComponent} from './match-details/match-details.component';
import {RentAdsComponent} from './rent-ads/rent-ads.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'mymatches', component: MatchesComponent, canActivate: [LoginGuard]},
  {path: 'match/:id', component: MatchDetailsComponent},
  {
  path: 'mymatches',
  component: MatchesComponent
  },
  {
    path: 'match/:id',
    component: MatchDetailsComponent
  },
  {
    path: 'advertisements',
    component: RentAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
