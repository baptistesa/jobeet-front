import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  base_url = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  }

  // Return CV of user
  getCV(id) {
    return this.http.get(this.base_url + "cv/get/" + id);
  }

  // Update description
  updateDescription(description) {
    let body = {
      description: description
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.put(this.base_url + "cv/modifyCV", body, httpOptions);
  }

  // Add formation
  addFormation(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "formations/add", body, httpOptions);
  }

  // Add experience
  addExperience(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "experience/add", body, httpOptions);
  }

  // Add competence
  addCompetence(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url + "competences/addToUser", body, httpOptions);
  }

  // Delete competence
  deleteCompetence(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.delete(this.base_url + "competences/delete/" + id, httpOptions);
  }

  // Delete formation
  deleteFormation(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.delete(this.base_url + "formations/delete/" + id, httpOptions);
  }

  // Delete experience
  deleteExperience(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.delete(this.base_url + "experience/delete/" + id, httpOptions);
  }


  // Upload picture
  uploadPic(fileToUpload: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    const formData: FormData = new FormData();
    formData.append('picture', fileToUpload, fileToUpload.name);
    return this.http.post(this.base_url + "users/upload", formData, httpOptions);
  }

  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url + "users/getUser/" + id, httpOptions);
  }
}
