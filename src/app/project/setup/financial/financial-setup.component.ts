import {ProjectSetupDataService} from '../../../data-service/project-setup-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FinancialSetup} from "../../../model/financialSetup";

@Component({
  selector: 'app-financial-setup',
  templateUrl: './financial-setup.component.html',
  styleUrls: ['./financial-setup.component.css']
})

export class FinancialSetupComponent implements OnInit {
  submitted: boolean;
  financialSetup: FinancialSetup;
  message: string;
  lock: boolean;
  constructor(private dataService: ProjectSetupDataService,
    private location: Location) {
    this.financialSetup = new FinancialSetup();
  }

  ngOnInit() {
    this.getFinancialSetup();
  }

  saveFinancialSetup() {
    console.log(this.financialSetup);
    this.dataService.saveFinancialSetup(this.financialSetup)
      .subscribe(
        () => {
          this.getFinancialSetup();
          this.message = 'Financial Setup Saved and this setup will be locked';
          this.lock = true},
        );
  }

  getFinancialSetup() {
    this.dataService.getFinancialSetup()
      .subscribe(
        financialSetup => {
        if (financialSetup != null) {
          this.financialSetup = financialSetup;
          this.lock = true;
        }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.saveFinancialSetup();
  }
}
