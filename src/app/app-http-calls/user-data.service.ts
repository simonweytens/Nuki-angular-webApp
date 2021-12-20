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

  //Alle users ophalen
  getUsers(){
    return this.httpClient.get<Array<UserProfile>>(`${this.url_prefix}/api/users`)
    .pipe(
      tap(_ => console.log(this.url_prefix))
    )
  }

  addUser(user: FormData){
    return this.httpClient.post<Array<UserProfile>>(`${this.url_prefix}/api/users`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })   
  }

  //1 user ophalen
  getUser(id: string): Observable<UserProfile> {
    const url = `${this.url_prefix}/api/users/${id}`
    return this.httpClient.get<UserProfile>(url)
    .pipe(
      tap(_ => console.log(`fetched user id=${id}`))
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


