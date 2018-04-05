import {Customer} from '../../../customer';
import {DataService} from '../../../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-material-setup',
  templateUrl: './material-setup.component.html',
  styleUrls: ['./material-setup.component.css']
})

export class MaterialSetupComponent implements OnInit {
  customer = new Customer;
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  private save(): void {
    this.dataService.create(this.customer);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
