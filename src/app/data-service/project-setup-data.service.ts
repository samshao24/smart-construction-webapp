import {Headers, Http} from "@angular/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {PaintingMaterial} from "../model/paintingMaterial";

@Injectable()
export class ProjectSetupDataService {

  private projectSetupUrl = 'project/admin';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private router: Router) {}

  getAllPaintingMaterial(): Promise<PaintingMaterial[]> {
    const url = this.projectSetupUrl + '/painting/material/all';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as PaintingMaterial[])
      .catch(this.handleError);
  }

  savePaintingMaterial(paintingMaterial: PaintingMaterial) {
    const url = this.projectSetupUrl + '/painting/material/save';
    return this.http
      .post(url, JSON.stringify(paintingMaterial), {headers : this.headers})
      .toPromise()
      .then(() => {
        this.router.navigate(['/project/setup/material/list'])
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
