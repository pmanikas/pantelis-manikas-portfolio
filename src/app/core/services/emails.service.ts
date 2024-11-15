import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailSubscription, MailchimpResponse } from 'src/app/shared/models/email.model';

const EMAIL_SUBSCRIBE_URL: string =
  'https://pantelismanikas.us1.list-manage.com/subscribe/post-json?u=6ae4ca11097c79924ce1a2b9a&amp;id=c67ad0460e';

@Injectable({
  providedIn: 'root',
})

export class EmailsService {
  constructor(private httpClient: HttpClient) {}

  public sub(data: EmailSubscription): Observable<MailchimpResponse> {
    const params: HttpParams = new HttpParams()
      .set('EMAIL', data.email)
      .set('b_6ae4ca11097c79924ce1a2b9a_c67ad0460e', '');
    const mailChimpUrl = `${EMAIL_SUBSCRIBE_URL}&${params.toString()}`;
    return this.httpClient.jsonp<MailchimpResponse>(mailChimpUrl, 'c')
      .pipe(map(res => res as MailchimpResponse));
  }
}
