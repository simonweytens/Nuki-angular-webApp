import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private url_prefix = "https://emailstoreapi20211214175742.azurewebsites.net"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  }

  //Alle users ophalen
  getUsers(){
    return this.httpClient.get<Array<UserProfile>>(`${this.url_prefix}/api/users`)
    .pipe(
      tap(_ => console.log(this.url_prefix))
    )
  }

  addUser(user: FormData){
    return this.httpClient.post<Array<UserProfile>>(`${this.url_prefix}/api/users`, 
      user, 
      this.httpOptions
      )
  }

  //1 user ophalen
  getUser(id: string): Observable<UserProfile> {
    const url = `${this.url_prefix}/api/users/${id}`
    return this.httpClient.get<UserProfile>(url)
    .pipe(
      tap(_ => console.log(`fetched user id=${id}`))
    )
  }

  deleteUser(id: string): Observable<UserProfile>{
    const url = `${this.url_prefix}/api/users/${id}`
    return this.httpClient.delete<UserProfile>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`))
    )
  }

}

export type UserProfile = {
  id: string,
  firstName: string;
  lastName: string;
  emailAdress: string;
  rnummer: string;
}


