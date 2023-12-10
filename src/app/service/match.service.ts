import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL:string ="http://localhost:8080";
  constructor(private httpClient:HttpClient) {}

  //Request to return all matches
  getAllMatches(){
    return this.httpClient.get(this.matchURL)
  }

  addMatch(match:any){
    return this.httpClient.post(this.matchURL,match);
  }

  editMatch(match:any){
    return this.httpClient.put(this.matchURL, match);
  }

  deleteMatch(id:number){
    return this.httpClient.delete(this.matchURL+"/"+id);
  }
}
