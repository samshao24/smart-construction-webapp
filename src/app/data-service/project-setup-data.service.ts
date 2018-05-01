import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {PaintingMaterial} from "../model/paintingMaterial";
import {FinancialSetup} from "../model/financialSetup";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProjectSetupDataService {

  private projectSetupUrl = 'project/admin';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getFinancialSetup() {
    const url = this.projectSetupUrl + '/painting/financial/setup';
    return this.http.get<FinancialSetup>(url);
  }

  saveFinancialSetup(financialSetup: FinancialSetup) {
    const url = this.projectSetupUrl + '/painting/financial/save';
    return this.http
      .post(url, JSON.stringify(financialSetup), {headers: this.headers});
  }

  getAllPaintingMaterial() {
    const url = this.projectSetupUrl + '/painting/material/all';
    return this.http.get<PaintingMaterial[]>(url);
  }

  savePaintingMaterial(paintingMaterial: PaintingMaterial) {
    const url = this.projectSetupUrl + '/painting/material/save';
    return this.http
      .post(url, JSON.stringify(paintingMaterial), {headers: this.headers});
  }

  deletePaintingMaterial(id: number) {
    const url = this.projectSetupUrl + '/painting/material/delete/' + id;
    return this.http.delete(url);
  }
}
