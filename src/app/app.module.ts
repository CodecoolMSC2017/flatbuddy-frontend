import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MatchesComponent } from './matches/matches.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RentAdsComponent } from './rent-ads/rent-ads.component';
import { RentAdDetailsComponent } from './rent-ad-details/rent-ad-details.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewAdvertisementComponent } from './new-advertisement/new-advertisement.component';
import { FlatmatesComponent } from './flatmates/flatmates.component';
import { PendingMatchesComponent } from './pending-matches/pending-matches.component';
import { UserAdvertisementsComponent } from './user-advertisements/user-advertisements.component';
import { AdvertisementEditComponent } from './advertisement-edit/advertisement-edit.component';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "87138340487-dna6m556e14folussr8dqq5pn0k3em07.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/spreadsheets.readonly"
  ].join(" ")
};
import { RentSlotsComponent } from './rent-slots/rent-slots.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';
import { AdvertisementFilterPipe } from './advertisement-filter.pipe';
import { AdvertisementFilterComponent } from './advertisement-filter/advertisement-filter.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { PaypalComponent } from './paypal/paypal.component';
import { RentslotseditComponent } from './rentslotsedit/rentslotsedit.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';
import { AdminAdEditComponent } from './admin-ad-edit/admin-ad-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NavigationComponent,
    MatchDetailsComponent,
    LoginComponent,
    MatchDetailsComponent,
    RentAdsComponent,
    RentAdDetailsComponent,
    RegisterComponent,
    UserDetailsComponent,
    ImageViewerComponent,
    UserProfileComponent,
    NewAdvertisementComponent,
    FlatmatesComponent,
    PendingMatchesComponent,
    UserAdvertisementsComponent,
    AdvertisementEditComponent,
    RentSlotsComponent,
    NotificationsComponent,
    RentSlotsComponent,
    MessageComponent,
    AdvertisementFilterPipe,
    AdvertisementFilterComponent,
    SentMessagesComponent,
    InboxComponent,
    PaypalComponent,
    RentslotseditComponent,
    AdminUserComponent,
    AdminUserEditComponent,
    AdminAdEditComponent
  ],
  imports: [
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
