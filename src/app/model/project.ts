import {Customer} from "./customer";
import {Room} from "./room";
import {PaintingMaterial} from "./paintingMaterial";

export class Project {
    public id: number;
    public type: ProjectType;
    public beginDate: Date;
    public endDate: Date;
    public status: string;
    public customer: Customer;
    public totalCost: number;
    public roomList: Room[];
    public paintingMaterialId: number;
    public paintingMaterialDisplay: string;
}

export class ProjectType {
    public id: number;
    public type: string;
}
