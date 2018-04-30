import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
import {Room} from "../model/room";

@Injectable()
export class RoomDataService {

  private roomUrl = 'room';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private router: Router) {}

  getRoomById(id: number) {
    const url = this.roomUrl + '/detail/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  create(room: Room) {
    const url = this.roomUrl + '/save';
    return this.http
      .post(url, JSON.stringify(room), {headers : this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/project/view', room.projectId])
      })
      .catch(this.handleError);
  }

  delete(id: number) {
    const url = this.roomUrl + '/delete/' + id;
    return this.http.delete(url)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  calculate(room: Room) {
    const url = this.roomUrl + '/calculate';
    return this.http
      .post(url, JSON.stringify(room), {headers : this.headers})
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
