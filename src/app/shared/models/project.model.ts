export class Project {
  _id?: string | undefined;
  title: string;
  type: string;
  url: string;
  image: string;
  description: string;
  created_date?: Date;
  modified_date?: Date;
  order?: number;
  _model?: string;

  constructor() {
    this.description = '';
    this.image = '';
    this.title = '';
    this.type = '';
    this.url = '';
  }
}
