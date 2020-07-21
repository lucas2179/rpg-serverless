import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private http: HttpClient) { }

  getRooms(parametro: number): Observable<Room> {
    var url: string;
    url = "https://us-south.functions.appdomain.cloud/api/v1/web/Lucas.Aparecido.Souza%40ibm.com_dev/default/cp-sequence.json?id=" + parametro;
    console.log("url", url);
    return this.http.get<Room>(url)
      .pipe(
        tap(_ => console.log('fetched cloudant'))
      );

  }
}
