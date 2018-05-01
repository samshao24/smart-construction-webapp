import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Project, ProjectType } from '../model/project';
import {PaintingMaterial} from "../model/paintingMaterial";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ProjectDataService {

  private projectUrl = 'project';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) {}

  // Get all projects
  getProjects() {
    const url = this.projectUrl + '/list';
    return this.http.get<Project[]>(url);
  }

  getProjectType() {
    const url = this.projectUrl + '/admin/type';
    return this.http.get<ProjectType[]>(url);
  }

  getPaintingMaterial() {
    const url = this.projectUrl + '/admin/painting/material/all';
    return this.http.get<PaintingMaterial[]>(url);
  }

  getProjectById(id: number) {
    const url = this.projectUrl + '/detail/' + id;
    return this.http.get<Project>(url);
  }

  create(project: Project) {
    const url = this.projectUrl + '/save';
    return this.http
      .post(url, JSON.stringify(project), {headers : this.headers});
  }

  delete(id: number) {
    const url = this.projectUrl + '/delete/' + id;
    return this.http.delete(url);
  }
}
