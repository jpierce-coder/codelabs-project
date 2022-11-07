export class Todo {
  public titleName: string;
  public description: string;
  public dueDate: string;
  public createdBy: string;

  constructor(titleName: string, desc: string, dueDate: string, createdBy: string) {
    this.titleName = titleName;
    this.description = desc;
    this.dueDate = dueDate;
    this.createdBy = createdBy;
  }

}

