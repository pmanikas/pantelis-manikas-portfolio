export class Article {
  id: number;
  name: string;
  alias: string;
  updated_at: string;
  created_at: string;
  photo: {
    alt: string;
    large: {
      URL: string;
      webpURL: string;
      width: number;
      height: number;
    };
    medium: {
      URL: string;
      webpURL: string;
      width: number;
      height: number;
    };
    thumb: {
      URL: string;
      webpURL: string;
      width: number;
      height: number;
    };
    mini: {
      URL: string;
      webpURL: string;
      width: number;
      height: number;
    };
  };
  nickname: string;
  publish: {
    date: {
      start: string;
    };
  };
  author: {
    id: number;
    username: string;
    nickname: string;
    alias: string;
  };
  reading_duration: number;
  category: [
    {
      id: number;
      name: string;
      alias: string;
    }
  ];

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
