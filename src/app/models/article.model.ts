export class Article {
  title: string;
  url: string;
  medium: {
    title: string,
    url: string
  };
  image: string;
  type: string;
  excerpt: string;

  constructor() {
    this.title = '';
    this.url = '';
    this.medium = {
      title: '',
      url: ''
    },
    this.image = '';
    this.type = '';
    this.excerpt = '';
  }
}
