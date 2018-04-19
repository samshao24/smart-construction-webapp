import {RoomDataService} from '../../data-service/room-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Room} from "../../model/room";
import {Input} from "@angular/core";

@Component({
  selector: 'app-room-main',
  templateUrl: './room-main.component.html',
  styleUrls: ['./room-main.component.css']
})

export class RoomMainComponent implements OnInit {
  room: Room;
  showCalculation: boolean;
  submitted: boolean;
  @Input() projectId;
  constructor(private dataService: RoomDataService,
              private location: Location,
              public activeModal: NgbActiveModal) {
    this.room = new Room;
    console.log(this.projectId);
  }

  ngOnInit() {
  }

  calculate() {
    this.showCalculation = true;
  }

  onSubmit() {
    console.log('submitted');
    this.submitted = true;
    this.dataService.create(this.room);
  }
}
