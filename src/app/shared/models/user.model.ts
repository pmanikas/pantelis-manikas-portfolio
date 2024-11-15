export class User {
  _id?: string | undefined;
  name: string;
  username: string;
  email: string;
  password?: string;
  image: string;
  _model?: string;

  constructor() {
    this.name = '';
    this.username = '';
    this.email = '';
    this.image = '';
  }
}
