import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Project, ProjectType } from '../model/project';
import {PaintingMaterial} from "../model/paintingMaterial";

@Injectable()
export class ProjectDataService {

  private projectUrl = 'project';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private router: Router) {}

  // Get all projects
  getProjects(): Promise<Project[]> {
    const url = this.projectUrl + '/list';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  getProjectType(): Promise<ProjectType[]> {
    const url = this.projectUrl + '/admin/type';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ProjectType[])
      .catch(this.handleError);
  }

  getPaintingMaterial(): Promise<PaintingMaterial[]> {
    const url = this.projectUrl + '/admin/painting/material/all';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as PaintingMaterial[])
      .catch(this.handleError);
  }

  getProjectById(id: number) {
    const url = this.projectUrl + '/detail/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }

  create(project: Project) {
    const url = this.projectUrl + '/save';
    return this.http
      .post(url, JSON.stringify(project), {headers : this.headers})
      .toPromise()
      .then(() => this.router.navigate(['/project/list']))
      .catch(this.handleError);
  }

  delete(id: number) {
    const url = this.projectUrl + '/delete/' + id;
    return this.http.delete(url)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
