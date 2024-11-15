export interface PhotoMeta {
  URL: string;
  webpURL: string;
  width: number;
  height: number;
};

export interface Photo {
  alt: string;
  large: PhotoMeta;
  medium: PhotoMeta;
  thumb: PhotoMeta;
  mini: PhotoMeta;
};

export interface Author {
  id: number;
  username: string;
  nickname: string;
  alias: string;
};

export interface Category {
  id: number;
  name: string;
  alias: string;
}

export interface Publish {
    date: {
      start: string;
    };
};

export class Article {
  id: number;
  name: string;
  alias: string;
  updated_at: string;
  created_at: string;
  photo: Photo;
  nickname: string;
  publish: Publish;
  author: Author;
  reading_duration: number;
  category: Category[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.alias = '';
    this.updated_at = '';
    this.created_at = '';
    this.photo = {
      alt: '',
      large: {
        URL: '',
        webpURL: '',
        width: 0,
        height: 0,
      },
      medium: {
        URL: '',
        webpURL: '',
        width: 0,
        height: 0,
      },
      thumb: {
        URL: '',
        webpURL: '',
        width: 0,
        height: 0,
      },
      mini: {
        URL: '',
        webpURL: '',
        width: 0,
        height: 0,
      },
    };
    this.nickname = '';
    this.publish = {
      date: {
        start: '',
      },
    };
    this.author = {
      id: 0,
      username: '',
      nickname: '',
      alias: '',
    };
    this.reading_duration = 0;
    this.category = [
      {
        id: 0,
        name: '',
        alias: '',
      },
    ];
  }
}
