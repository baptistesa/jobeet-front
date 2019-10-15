import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { OffreComponent } from './offre/offre.component';
import { OffresComponent } from './offres/offres.component';
import { MesoffresComponent } from './mesoffres/mesoffres.component';
import { AllEntreprisesComponent } from './all-entreprises/all-entreprises.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MatchsComponent } from './matchs/matchs.component';
import { MonEntrepriseComponent } from './mon-entreprise/mon-entreprise.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { AllUsersComponent } from './all-users/all-users.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Connexion' } },
  { path: '', component: HomeComponent, data: { title: 'Accueil' }, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent, data: { title: 'Mon profil' }, canActivate: [AuthGuard] },
  { path: 'entreprise', component: EntrepriseComponent, data: { title: 'Profil entreprise' }, canActivate: [AuthGuard] },
  { path: 'entreprises', component: AllEntreprisesComponent, data: { title: 'Toutes les entreprises' }, canActivate: [AuthGuard] },
  { path: 'monentreprise', component: MonEntrepriseComponent, data: { title: 'Mon entreprise' }, canActivate: [AuthGuard] },
  { path: 'offre', component: OffreComponent, data: { title: 'Offre' }, canActivate: [AuthGuard] },
  { path: 'offres', component: OffresComponent, data: { title: 'Offres' }, canActivate: [AuthGuard] },
  { path: 'mesoffres', component: MesoffresComponent, data: { title: 'MesOffres' }, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatListComponent, data: { title: 'Chat' }, canActivate: [AuthGuard] },
  { path: 'matchs', component: MatchsComponent, data: { title: 'Matchs' }, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, data: { title: 'Search' }, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserComponent, data: { title: 'User' }, canActivate: [AuthGuard] },
  { path: 'room', component: ChatRoomComponent, data: { title: 'Chat' }, canActivate: [AuthGuard] },
  { path: 'all', component: AllUsersComponent, data: { title: 'Chat' }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
