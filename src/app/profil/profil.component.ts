import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfilService } from './service/profil.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class ProfilComponent implements OnInit {

  display_form = false;
  display_form_description = false;
  display_form_formation = false;
  user: any;
  cv: any;
  competences_all;

  // Fields
  description = "";
  formation = {
    cv_id: "",
    title: "",
    school: "",
    start_date: "",
    end_date: "",
    description: ""
  }
  experience = {
    position: "",
    company: "",
    description: "",
    start_date: "",
    end_date: "",
    cv_id: ""
  }
  competence: string;



  fileToUpload: File = null;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: ProfilService, public datepipe: DatePipe) {
    this.user = JSON.parse(localStorage.getItem("user"))
    this.getUser(this.user.id)
    this.getCV();
  }

  ngOnInit() {
    this.nav.show();
  }

  // Ajouter une expérience
  addExperience() {
    if (!this.display_form) {
      this.display_form = true;
      return;
    }
    this.display_form = false;

    this.experience.cv_id = this.cv.cv.id;
    this.experience.start_date = this.datepipe.transform(this.experience.start_date, 'yyyy-MM-dd')
    this.experience.end_date = this.datepipe.transform(this.experience.end_date, 'yyyy-MM-dd')

    this.http.addExperience(this.experience)
      .subscribe(data => {
        this.getCV();
      }, err => {
        console.log("error == ", err)
      })
  }

  // Get sanitized picture
  getBackground(image) {
    let safe_pic = "http://localhost:3000/pictures/" + image
    return this._sanitizer.bypassSecurityTrustStyle(`url(${safe_pic})`);
  }

  // Retrieve CV
  getCV() {
    this.http.getCV(this.user.id)
      .subscribe(data => {
        this.cv = data
      })
  }

  // Display form to update description
  displayFormDescription() {
    if (!this.display_form_description) {
      this.display_form_description = true;
      return;
    }
    this.display_form_description = false;
    this.http.updateDescription(this.description)
      .subscribe(data => {
        this.getCV();
      });
  }

  // Display form for formation
  displayFormFormation() {
    if (!this.display_form_formation) {
      this.display_form_formation = true;
      return;
    }
    this.formation.cv_id = this.cv.cv.id;
    this.formation.start_date = this.datepipe.transform(this.formation.start_date, 'yyyy-MM-dd')
    this.formation.end_date = this.datepipe.transform(this.formation.end_date, 'yyyy-MM-dd')

    this.display_form_formation = false;
    this.http.addFormation(this.formation)
      .subscribe(data => {
        this.getCV();
      })
  }

  // Add Competence on key down
  onKeydown(event) {
    let body = {
      title: this.competence
    }
    if (event.key === "Enter") {
      this.http.addCompetence(body)
        .subscribe(data => {
          this.getCV();
          this.competence = "";
        })
    }
  }

  // Delete competence
  deleteCompetence(id) {
    this.http.deleteCompetence(id)
      .subscribe(data => {
        this.getCV();
      })
  }

  // Delete formation
  deleteFormation(id) {
    this.http.deleteFormation(id)
      .subscribe(data => {
        this.getCV();
      })
  }

  // Delete experience
  deleteExperience(id) {
    this.http.deleteExperience(id)
      .subscribe(data => {
        this.getCV();
      })
  }

  handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFile();
  }

  uploadFile() {
    this.http.uploadPic(this.fileToUpload).subscribe(data => {
      this.getCV();
      this.getUser(JSON.parse(localStorage.getItem("user")).id);
    });
  }

  getUser(id) {
    this.http.getUser(id)
      .subscribe(data => {
        this.user = JSON.parse(JSON.stringify(data)).data[0]
        this.nav.setUser(this.user)
      })
  }
}
