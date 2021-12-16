import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';


const url_prefix = "https://emailstoreapi20211214175742.azurewebsites.net/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Array<UserProfile>>(url_prefix)
  }
  
  save(user: UserProfile): Observable <UserProfile>{
    return this.httpClient.post<UserProfile>(url_prefix, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })   
  }
}

export type UserProfile = {
  firstName: string;
  lastName: string;
  emailAdress: string;
  rnummer: string;
}


