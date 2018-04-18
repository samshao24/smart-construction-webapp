import {Customer} from '../../customer';
import {DataService} from '../../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})

export class RoomMainComponent implements OnInit {
  submitted: boolean;
  constructor(private dataService: DataService,
              private location: Location,
              public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
    this.submitted = true;
  }
}
