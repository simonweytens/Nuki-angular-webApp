import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const url_prefix = "https://localhost:7259/api/emails"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Array<UserProfile>>("https://localhost:7259/api/emails")
  }
}

export type UserProfile = {
  firstName: string;
  lastName: string;
  emailAdress: string;
  rNummer: string;
}