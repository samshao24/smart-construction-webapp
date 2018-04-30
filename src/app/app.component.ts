import {Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  authenticated: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  login() {
    let modalRef = this.modalService.open(LoginComponent, {centered: true});
    modalRef.result.then((result) => {
      this.authenticated = result;
    });
  }

  logout() {
    if(confirm("Are you sure you want to logout?")) {
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }
  }
}
