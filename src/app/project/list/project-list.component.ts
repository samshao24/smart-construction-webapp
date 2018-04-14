import {Project} from '../data/project';
import {ProjectDataService} from '../data/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

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
    private location: Location) {}

  ngOnInit(): void {
    this.getProjects();
  }

  /*private save(): void {
    this.dataService.create(this.project);
  }*/

  /*onSubmit() {
    this.submitted = true;
    this.save();
  }*/

  getProjects() {
    this.dataService.getProjects().then(projects => this.projects = projects);
  }
}
