import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';


const url_prefix = "https://emailstoreapi20211214175742.azurewebsites.net/api/users"
const test_url = "https://postman-echo.com/post"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  //Alle users ophalen
  getUsers(){
    return this.httpClient.get<Array<UserProfile>>(url_prefix)
    .pipe(
      tap(_ => console.log('fetched users'))
    )
  }

  addUser(user: FormData){
    return this.httpClient.post<Array<UserProfile>>(url_prefix, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })   
  }

  //1 user ophalen
  getUser(id: string): Observable<UserProfile> {
    const url = `${url_prefix}/${id}`
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


