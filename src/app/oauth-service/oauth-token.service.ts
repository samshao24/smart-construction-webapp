import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {OAuthResponse} from "./oauth-response";
import {CookieService} from "ngx-cookie-service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class OauthTokenService {

  private accessToken;

  constructor(
    private _router: Router,
    private http: HttpClient,
    private cookieService: CookieService){}

  getAccessToken() {
    let accessTokenFromCookie = this.cookieService.get('accessToken');
    return accessTokenFromCookie;
  }

  obtainAccessToken(clientId, clientSecret) {
    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic '+ btoa(clientId + ":" + clientSecret)
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'client_credentials');

    let body = urlSearchParams.toString();
    let url = "http://localhost:9999/authorization/oauth/token";
    return this.http.post<OAuthResponse>(url, body, {headers : headers});
  }
}
