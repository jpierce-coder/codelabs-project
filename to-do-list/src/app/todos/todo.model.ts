export class Todo {
  public title: string;
  public description: string;
  public dueDate: string;
  public createdBy: string;

  constructor(title: string, desc: string, dueDate: string, createdBy: string) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.createdBy = createdBy;
  }

}

