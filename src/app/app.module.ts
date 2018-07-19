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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
