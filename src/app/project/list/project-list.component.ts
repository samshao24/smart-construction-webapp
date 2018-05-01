import {Project} from '../../model/project';
import {ProjectDataService} from '../../data-service/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NavigationExtras, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  project = new Project;
  projects: Project[];
  submitted = false;
  constructor(
    private dataService: ProjectDataService,
    private router: Router,
    private cookieService: CookieService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  deleteProject(id) {
    if(confirm("Are you sure to delete project")) {
      this.dataService.delete(id)
        .subscribe(
          () => this.getProjects(),
          err => console.log(err)
        )
    }
  }

  getProjects() {
    this.dataService.getProjects().subscribe(
      data => this.projects = data,
      err => console.log(err)
    )
  }
}
