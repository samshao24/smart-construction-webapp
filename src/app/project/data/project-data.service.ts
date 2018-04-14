import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project, ProjectType } from './project';

@Injectable()
export class ProjectDataService {

  private projectUrl = 'project';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

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

  create(project: Project) {
    const url = this.projectUrl + '/save';
    return this.http
      .post(url, JSON.stringify(project), {headers : this.headers})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
