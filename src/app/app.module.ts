// DEFAULT IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTS
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// CUSTOM MODULES
import { CustomMaterialModule } from "./core/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ProfilComponent } from './profil/profil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AllEntreprisesComponent } from './all-entreprises/all-entreprises.component';
import { OffresComponent } from './offres/offres.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MonEntrepriseComponent } from './mon-entreprise/mon-entreprise.component';
import { OffreComponent } from './offre/offre.component';
import { MesoffresComponent } from './mesoffres/mesoffres.component';
import { SearchComponent } from './search/search.component';
import { MatchsComponent } from './matchs/matchs.component';
import { UserComponent } from './user/user.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { VIEWPORT_RULER_PROVIDER } from '@angular/cdk/scrolling';
import { AllUsersComponent } from './all-users/all-users.component'




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    ProfilComponent,
    EntrepriseComponent,
    AllEntreprisesComponent,
    OffresComponent,
    ChatListComponent,
    MonEntrepriseComponent,
    OffreComponent,
    MesoffresComponent,
    SearchComponent,
    MatchsComponent,
    UserComponent,
    ChatRoomComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
