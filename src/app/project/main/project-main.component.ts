import {Project, ProjectType} from '../../model/project';
import {ProjectDataService} from '../data-service/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Customer} from "../../model/customer";
import {Address} from "../../model/address";
import {ActivatedRoute, Router} from '@angular/router';

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
    private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      this.getProjectById(this.projectId);
    });
  }

  ngOnInit() {}

  getProjectById(id) {
    this.dataService.getProjectById(id).then(project => this.project = project);
  }
}
