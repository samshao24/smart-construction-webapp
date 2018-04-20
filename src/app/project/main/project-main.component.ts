import {ProjectDataService} from '../../data-service/project-data.service';
import {RoomDataService} from "../../data-service/room-data.service";
import {Component, Injectable, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoomMainComponent} from "../../room/main/room-main.component";

@Component({
  selector: 'app-project-main',
  templateUrl: './project-main.component.html',
  styleUrls: ['./project-main.component.css']
})
export class ProjectMainComponent implements OnInit {
  project: any;
  private sub: any;
  private projectId: number;
  constructor(
    private projectDataService: ProjectDataService,
    private roomDataService: RoomDataService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
    this.sub = this.route.params.subscribe(params => {
      this.projectId = +params['id'];
    });
  }

  ngOnInit() {
    this.getProjectById(this.projectId);
  }

  open(action, room) {
    const modalRef = this.modalService.open(RoomMainComponent, {size: "lg"});
    const params = {
      'projectId': this.projectId,
      'action': action,
      'room': room
    };
    modalRef.componentInstance.params = params;
  };

  deleteRoom(id) {
    if(confirm("Are you sure to delete room")) {
      this.roomDataService.delete(id)
        .then(() => {
          this.router.navigate(['/project/view', this.projectId])
        })
    }
  }

  getProjectById(id) {
    this.projectDataService.getProjectById(id).then(project => this.project = project);
  }
}
