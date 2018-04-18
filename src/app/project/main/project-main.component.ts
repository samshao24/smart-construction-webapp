import {ProjectDataService} from '../../data-service/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ViewEncapsulation} from "@angular/core";
import {RoomMainComponent} from "../../room/main/room-main.component";
import {ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

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
    private dataService: ProjectDataService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
    this.sub = this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      this.getProjectById(this.projectId);
    });
  }

  ngOnInit() {}

  open() {
    this.modalService.open(RoomMainComponent, {size: "lg", centered: true});
  };

  getProjectById(id) {
    this.dataService.getProjectById(id).then(project => this.project = project);
  }
}
