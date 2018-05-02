import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {Room} from "../model/room";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RoomDataService {

  private roomUrl = 'room';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) {}

  getRoomById(id: number) {
    const url = this.roomUrl + '/detail/' + id;
    return this.http.get<Room>(url);
  }

  create(room: Room) {
    const url = this.roomUrl + '/save';
    return this.http
      .post(url, JSON.stringify(room), {headers : this.headers});
  }

  delete(id: number) {
    const url = this.roomUrl + '/delete/' + id;
    return this.http.delete(url);
  }

  calculate(room: Room) {
    const url = this.roomUrl + '/calculate';
    return this.http.post<Room>(url, JSON.stringify(room), {headers : this.headers});
  }
}
