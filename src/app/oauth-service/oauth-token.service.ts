import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";
import {RequestOptions} from "@angular/http";

@Injectable()
export class OauthTokenService {

  constructor(
    private _router: Router, private _http: Http){}

  obtainAccessToken(clientId, clientSecret){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'client_credentials');

    let body = urlSearchParams.toString();

    let headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(clientId + ":" + clientSecret)
    });

    let url = "http://localhost:9999/authorization/oauth/token";
    this._http.post(url, body, {headers: headers})
      .toPromise()
      .then((data) => console.log(data))
      .catch();
  }
}
