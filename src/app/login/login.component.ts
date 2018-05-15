import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {OauthTokenService} from "../oauth-service/oauth-token.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submitted: boolean;
  username: string;
  password: string;
  authenticated: boolean;
  accessToken: string;
  public loading = false;
  constructor(private router: Router,
              public activeModal: NgbActiveModal,
              public oauthService: OauthTokenService,
              public cookieService: CookieService) {
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.oauthService.obtainAccessToken(this.username, this.password)
      .subscribe(
        data => {
          this.accessToken = data.access_token;
          if (this.accessToken) {
            this.authenticated = true;
            this.cookieService.set('accessToken', this.accessToken);
            this.activeModal.close(this.authenticated);
          } else {
            this.authenticated = false;
          }
        }, err => this.authenticated = false,
        () => this.loading = false
      );
  }
}
