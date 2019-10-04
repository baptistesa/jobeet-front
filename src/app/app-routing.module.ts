import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Connexion' } },
  { path: '', component: HomeComponent, data: { title: 'Accueil' }, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent, data: { title: 'Mon profil' }, canActivate: [AuthGuard] },
  { path: 'entreprise', component: EntrepriseComponent, data: { title: 'Profil entreprise' }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
