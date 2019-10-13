import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MesoffresService } from './service/mesoffres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesoffres',
  templateUrl: './mesoffres.component.html',
  styleUrls: ['./mesoffres.component.scss']
})
export class MesoffresComponent implements OnInit {

  display_form = false;
  mesoffres;
  user;

  // Fields
  offre = {
    title : "",
    description : "",
    id_entreprise : "",
    id_author : ""
  }

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: MesoffresService, private router: Router) {
    this.getMesoffres();
    //this.addOffre();
    this.user = JSON.parse(localStorage.getItem("user"));
   }

  ngOnInit() {
    this.nav.show();
  }

  addOffre() {
    this.display_form = true;

    this.offre.title = this.offre.title;
    this.offre.description = this.offre.description;
    this.offre.id_entreprise = this.offre.id_entreprise;
    this.offre.id_author = this.user.id;

    this.http.addOffre(this.offre)
    .subscribe(data => {
      this.getMesoffres();
      alert("Offre ajoutée avec succès");
    }, err => {
      console.log("error == ", err)
    })
  }

  getMesoffres() {
    this.http.getMesoffres()
      .subscribe(data => {
        //console.log("test offres : " + JSON.stringify(data));
        this.mesoffres = JSON.parse(JSON.stringify(data)).data;
      })
  }

  sendtoProfil(offre) {
    localStorage.setItem("offre", JSON.stringify(offre));
    this.router.navigate(["/offre"]);
  }
}
