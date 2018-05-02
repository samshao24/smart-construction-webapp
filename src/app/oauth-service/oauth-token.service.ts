import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {OAuthResponse} from "./oauth-response";
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class OauthTokenService {

  private accessToken;
  private clientId = 'admin';
  private clientSecret = 'admin';

  constructor(
    private _router: Router,
    private http: HttpClient,
    private cookieService: CookieService){}

  getAccessToken() {
    let accessTokenFromCookie = this.cookieService.get('accessToken');
    return accessTokenFromCookie;
  }

  obtainAccessToken(username, password) {
    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(this.clientId + ":" + this.clientSecret)
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);


    let body = urlSearchParams.toString();
    let url = "http://localhost:9999/authorization/oauth/token";
    return this.http.post<OAuthResponse>(url, body, {headers : headers});
  }
}
