import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const url_prefix = "https://emailstoreapi20211214175742.azurewebsites.net/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Array<UserProfile>>(url_prefix)
  }
}

export type UserProfile = {
  firstName: string;
  lastName: string;
  emailAdress: string;
  rnummer: string;
}