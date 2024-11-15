export class Service {
  _id?: string | undefined;
  title: string;
  subtitle: string;
  description: string;
  _model?: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.description = '';
  }
}
