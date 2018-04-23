import {Headers, Http} from "@angular/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {PaintingMaterial} from "../model/paintingMaterial";
import {FinancialSetup} from "../model/financialSetup";

@Injectable()
export class ProjectSetupDataService {

  private projectSetupUrl = 'project/admin';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private router: Router) {}

  getFinancialSetup(): Promise<FinancialSetup> {
    const url = this.projectSetupUrl + '/painting/financial/setup';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as FinancialSetup)
      .catch(this.handleError);
  }

  saveFinancialSetup(financialSetup: FinancialSetup) {
    const url = this.projectSetupUrl + '/painting/financial/save';
    console.log(financialSetup);
    return this.http
      .post(url, JSON.stringify(financialSetup), {headers : this.headers})
      .toPromise()
      .then()
      .catch(this.handleError);
  }

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

  deletePaintingMaterial(id: number) {
    const url = this.projectSetupUrl + '/painting/material/delete/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(() =>
        this.router.navigate(['/project/setup/material/list']))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
