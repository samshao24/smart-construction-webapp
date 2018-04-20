import {ProjectSetupDataService} from '../../../../data-service/project-setup-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PaintingMaterial} from "../../../../model/paintingMaterial";

@Component({
  selector: 'app-material-setup',
  templateUrl: './material-setup.component.html',
  styleUrls: ['./material-setup.component.css']
})

export class MaterialSetupComponent implements OnInit {
  paintingMaterial: PaintingMaterial;
  constructor(private dataService: ProjectSetupDataService,
    private location: Location,
    public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.paintingMaterial = new PaintingMaterial;
  }

  private save(): void {
    this.dataService.savePaintingMaterial(this.paintingMaterial)
      .then(() => this.activeModal.close());
  }

  onSubmit() {
    this.save();
  }
}
