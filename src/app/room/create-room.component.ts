import {Customer} from '../customer';
import {DataService} from '../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})

export class CreateRoomComponent implements OnInit {
  customer = new Customer;
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  private save(): void {
    this.dataService.create(this.customer);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
