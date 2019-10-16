import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MonEntrepriseService } from './service/mon-entreprise.service';


@Component({
  selector: 'app-mon-entreprise',
  templateUrl: './mon-entreprise.component.html',
  styleUrls: ['./mon-entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonEntrepriseComponent implements OnInit {

  user: any;
  display_form = false;
  entreprise: any;
  entreprises: any;
  offres: any;
  add_entreprise = {
    name: "",
    description: ""
  }
  display_desc = false;
  description: any;
  fileToUpload: File = null;

  constructor(public router: Router, private nav: NavbarService, private _sanitizer: DomSanitizer, private http: MonEntrepriseService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getUser();
    if (this.user.id_entreprise != null)
    {
      this.getEntreprise(this.user.id_entreprise);
      this.getEntrepriseOffres(this.user.id_entreprise);
    }
    else
      this.getEntreprises();
  }

  ngOnInit() {
    this.nav.show();
  }

  getEntreprises() {
    this.http.getEntreprises()
      .subscribe(data => {
        this.entreprises = JSON.parse(JSON.stringify(data)).data;
      })
  }

  getEntreprise(id) {
    this.http.getEntreprise(id)
      .subscribe(data => {
        this.entreprise = JSON.parse(JSON.stringify(data)).data[0];
      })
  }

  addEntreprise() {
    this.display_form = true;

    this.add_entreprise.name = this.add_entreprise.name;
    this.add_entreprise.description = this.add_entreprise.description;
    this.http.addEntreprise(this.add_entreprise)
      .subscribe(data => {
        this.modifyIdEntreprise(JSON.parse(JSON.stringify(data)).data[0])
        alert("Entreprise ajoutée avec succès");
      }, err => {
        console.log("error == ", err)
      });
    this.router.navigate(["/entreprises"]);
  }

  modifyIdEntreprise(entreprise) {
    let body = {
      id_entreprise : entreprise.id
    }
    this.http.modifyIdEntreprise(body)
      .subscribe();
    this.getUser();
    
  }
  
  getEntrepriseOffres(id) {
    this.http.getEntrepriseOffres(id)
      .subscribe(data => {
        this.offres = JSON.parse(JSON.stringify(data)).data;
      })
  }

  sendtoOffre(offre) {
    localStorage.setItem("offre", JSON.stringify(offre));
    this.router.navigate(["/offre"]);
  }

  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  getUser() {
    this.http.getUser(this.user.id)
      .subscribe(data => {
        this.user = JSON.parse(JSON.stringify(data)).data[0];
        this.nav.setUser(this.user)
      })
  }

  displayFormDescription() {
    if (!this.display_desc) {
      this.display_desc = true;
      return;
    }
    this.display_desc = false;
    this.http.updateDescription(this.description)
      .subscribe(data => {
        this.getEntreprise(this.user.id_entreprise);
      });
  }

  handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFile();
  }

  uploadFile() {
    this.http.uploadPic(this.fileToUpload)
      .subscribe(data => {
        this.getEntreprise(this.user.id_entreprise)
      });
  } 
}
