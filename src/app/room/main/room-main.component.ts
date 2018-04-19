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
  disabled: boolean;
  action: string;
  @Input() params;
  constructor(private dataService: RoomDataService,
              private location: Location,
              public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.action = this.params.action;
    let room = this.params.room;
    switch (this.action) {
      case 'Add':
        this.room = new Room;
        this.disabled = false;
        break;
      case 'Edit':
        this.room = room;
        this.disabled = false;
        break;
      case 'View':
        this.room = room;
        this.disabled = true;
        break;
    }
    console.log(this.room);
    this.room.projectId = this.params.projectId;
  }

  calculate() {
    this.dataService.calculate(this.room)
      .then(res => {
        this.room = res;
      });
    this.showCalculation = true;
  }

  onSubmit() {
    this.submitted = true;
    this.dataService.create(this.room);
    this.activeModal.close();
  }
}
