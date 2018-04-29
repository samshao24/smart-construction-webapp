import {Component} from '@angular/core';
import {Room} from "../model/room";
import {Location} from "@angular/common";
import {RoomDataService} from "../data-service/room-data.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Input} from "@angular/core";
import {RoomExpense} from "../model/roomExpense";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loading: boolean;
  submitted: boolean;
  constructor(private dataService: RoomDataService,
              private location: Location,
              private router: Router,
              public activeModal: NgbActiveModal) {

  }
}
