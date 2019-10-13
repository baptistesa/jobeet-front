import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchsService {

  base_url = "http://localhost:3000/matchs/"

  constructor(private http: HttpClient) { 
    
  }
}
