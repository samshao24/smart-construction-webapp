export class Project {
    public id: number;
    public type: ProjectType;
    public beginDate: string;
    public endDate: string;
    public status: string;
    public totalCost: number;
}

export class ProjectType {
    public id: number;
    public type: string;
}
