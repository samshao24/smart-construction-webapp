import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Headers} from "@angular/http";

@Injectable()
export class OauthTokenService {

  constructor(
    private _router: Router, private _http: Http){}

  obtainAccessToken(clientId, clientSecret){
    let params = {
      'grant_type':'client_credentials'
    };
    // params.append('grant_type','password');
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic '+ btoa(clientId + ":" + clientSecret)});

    console.log(btoa(clientId + ":" + clientSecret));
    let url = "http://localhost:9999/authorization/oauth/token";
    this._http.post(url, params, {headers : headers})
      .toPromise()
      .then((data) => console.log(data))
      .catch();
  }
}
