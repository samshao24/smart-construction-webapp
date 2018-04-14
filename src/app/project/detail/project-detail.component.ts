import {Project, ProjectType} from '../data/project';
import {ProjectDataService} from '../data/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project = new Project;
  projectTypes: ProjectType[];
  submitted: boolean;
  constructor(private dataService: ProjectDataService,
    private location: Location) {}

  ngOnInit() {
    this.getAllProjectType();
  }

  getAllProjectType() {
    this.dataService.getProjectType().then(projectTypes => this.projectTypes = projectTypes);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.dataService.create(this.project);
  }
}
