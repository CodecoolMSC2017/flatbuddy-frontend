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
import { FlatmatesComponent } from './flatmates/flatmates.component';
import { PendingMatchesComponent } from './pending-matches/pending-matches.component';
import { UserAdvertisementsComponent } from './user-advertisements/user-advertisements.component';
import { AdvertisementEditComponent } from './advertisement-edit/advertisement-edit.component';
import { EditadvertisementGuard } from './editadvertisement.guard';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { InboxComponent } from './inbox/inbox.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mymatches', component: MatchesComponent, canActivate: [LoginGuard]},
  {path: 'match/:id', component: MatchDetailsComponent, canActivate: [LoginGuard]},
  {path: 'advertisements',component: RentAdsComponent,canActivate: [LoginGuard]},
  {path: 'advertisement/:id',component: RentAdDetailsComponent,canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: UserDetailsComponent, canActivate: [LoginGuard]},
  {path: 'myprofile', component: UserProfileComponent, canActivate: [LoginGuard]},
  {path: 'newadvertisement', component: NewAdvertisementComponent, canActivate: [LoginGuard]},
  {path: 'people', component: FlatmatesComponent, canActivate: [LoginGuard]},
  {path: 'pendingmatches', component: PendingMatchesComponent, canActivate: [LoginGuard]},
  {path: 'myadvertisements', component: UserAdvertisementsComponent, canActivate: [LoginGuard]},
  {path: 'notifications', component: NotificationsComponent, canActivate: [LoginGuard]},
  {path: 'editadvertisement/:id', component: AdvertisementEditComponent, canActivate: [LoginGuard], canLoad:[EditadvertisementGuard]},
  {path: 'newmessage', component: MessageComponent, canActivate: [LoginGuard]},
  {path: 'sentmessages', component: SentMessagesComponent, canActivate: [LoginGuard]},
  {path: 'inbox', component: InboxComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: '/advertisements' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
