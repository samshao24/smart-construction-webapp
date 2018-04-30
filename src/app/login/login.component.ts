import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OauthTokenService} from "../oauth-service/oauth-token.service";

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
  constructor(private router: Router,
              public activeModal: NgbActiveModal,
              public oauthService: OauthTokenService) {
  }

  onSubmit() {
    this.submitted = true;
    if (this.username === 'admin' && this.password === 'password') {
      this.authenticated = true;
      this.activeModal.close(this.authenticated);
    } else {
      this.oauthService.obtainAccessToken(this.username, this.password);
      this.authenticated = false;
    }
  }
}
