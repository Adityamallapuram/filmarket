import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActingProfileComponent } from './components/addProfile/acting-profile/acting-profile.component';
import { DirectorProfileComponent } from './components/addProfile/director-profile/director-profile.component';
import { MusicProfileComponent } from './components/addProfile/music-profile/music-profile.component';
import { DanceProfileComponent } from './components/addProfile/dance-profile/dance-profile.component';
import { DopProfileComponent } from './components/addProfile/dop-profile/dop-profile.component';
import { FilmTvCrewProfileComponent } from './components/addProfile/film-tv-crew-profile/film-tv-crew-profile.component';
import { EditorProfileComponent } from './components/addProfile/editor-profile/editor-profile.component';
import { ArtDesignerProfileComponent } from './components/addProfile/art-designer-profile/art-designer-profile.component';
import { LightSoundProfileComponent } from './components/addProfile/light-sound-profile/light-sound-profile.component';
import { EquipmentComponent } from './components/services/equipment/equipment.component';
import { PropsComponent } from './components/services/props/props.component';
import { StudioComponent } from './components/services/studio/studio.component';
import { MarketingComponent } from './components/services/marketing/marketing.component';
import { FinancialServicesComponent } from './components/services/financial-services/financial-services.component';
import { InsuranceServicesComponent } from './components/services/insurance-services/insurance-services.component';
import { OurServicesComponent } from './components/services/our-services/our-services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActingProfileComponent,
    DirectorProfileComponent,
    MusicProfileComponent,
    DanceProfileComponent,
    DopProfileComponent,
    FilmTvCrewProfileComponent,
    EditorProfileComponent,
    ArtDesignerProfileComponent,
    LightSoundProfileComponent,
    EquipmentComponent,
    PropsComponent,
    StudioComponent,
    MarketingComponent,
    FinancialServicesComponent,
    InsuranceServicesComponent,
    OurServicesComponent,
    NavbarComponent,
    FooterComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
