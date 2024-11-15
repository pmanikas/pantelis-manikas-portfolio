export class MailchimpResponse {
  result: string;
  msg: string;

  constructor() {
    this.result = '';
    this.msg = '';
  }
}

export interface EmailSubscription {
  email: string;
}
