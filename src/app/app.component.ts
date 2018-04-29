import {Component} from '@angular/core';
import {RoomMainComponent} from "./room/main/room-main.component";
import {ProjectDataService} from "./data-service/project-data.service";
import {OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {RoomDataService} from "./data-service/room-data.service";
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  login() {
    this.modalService.open(LoginComponent, {size: "lg"});
  };
}
