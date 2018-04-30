import {Project, ProjectType} from '../../model/project';
import {ProjectDataService} from '../../data-service/project-data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Customer} from "../../model/customer";
import {Address} from "../../model/address";
import {ActivatedRoute, Router} from '@angular/router';
import {PaintingMaterial} from "../../model/paintingMaterial";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project: any;
  projectTypes: ProjectType[];
  paintingMaterials: PaintingMaterial[];
  submitted: boolean;
  public action: string;
  private sub: any;
  private projectId: number;
  constructor(
    private dataService: ProjectDataService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
      this.sub = this.route.params.subscribe(params => {
        if (params['action'] === 'edit') {
          this.projectId = +params['id'];
          this.getProjectById(this.projectId);
          this.action = 'Edit';
        } else {
          this.action = 'Create';
          this.project = new Project;
          this.project.customer = new Customer;
          this.project.customer.address = new Address;
        }
        this.projectId = +params['id']; // (+) converts string 'id' to a number
      });
  }

  ngOnInit() {
    this.getAllProjectType();
    this.getAllPaintingMaterial();
  }

  getProjectById(id) {
    this.dataService.getProjectById(id)
      .then(project => this.project = project);
  }

  getAllProjectType() {
    this.dataService.getProjectType()
      .then(projectTypes => this.projectTypes = projectTypes);
  }

  getAllPaintingMaterial() {
    this.dataService.getPaintingMaterial()
      .then(paintingMaterials => this.paintingMaterials = paintingMaterials);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.dataService.create(this.project);
  }
}
