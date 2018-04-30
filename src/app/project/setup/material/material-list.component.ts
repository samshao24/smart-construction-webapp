import {ProjectSetupDataService} from '../../../data-service/project-setup-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {PaintingMaterial} from "../../../model/paintingMaterial";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialSetupComponent} from "./main/material-setup.component";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})

export class MaterialListComponent implements OnInit {
  submitted = false;
  paintingMaterialList: PaintingMaterial[];
  constructor(private dataService: ProjectSetupDataService,
    private location: Location,
    private modalService: NgbModal) {}

  ngOnInit() {
    this.getAllPaintingMaterial();
  }

  open() {
    let materialSetupModal = this.modalService.open(MaterialSetupComponent, {size: "lg"});
    materialSetupModal.result.then(() => {
      this.getAllPaintingMaterial();
    }).catch((error) => {
      console.log(error);
    });
  };

  delete(id) {
    if(confirm("Are you sure to delete project")) {
      this.dataService.deletePaintingMaterial(id)
        .then(() => this.getAllPaintingMaterial());
    }
  }

  getAllPaintingMaterial() {
    this.dataService.getAllPaintingMaterial()
      .then(paintingMaterialList => this.paintingMaterialList = paintingMaterialList);
  }
}
