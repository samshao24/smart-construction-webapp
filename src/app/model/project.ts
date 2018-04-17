import {Customer} from "./customer";

export class Project {
    public id: number;
    public type: ProjectType;
    public beginDate: Date;
    public endDate: Date;
    public status: string;
    public customer: Customer;
    public totalCost: number;
}

export class ProjectType {
    public id: number;
    public type: string;
}
