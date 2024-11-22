import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const FILES_URL: string = `${environment.API_ROOT}upload`;

@Injectable({
    providedIn: 'root'
})
export class UploadImagesService {
    constructor(private httpClient: HttpClient) { }

    public upload(formData: any): Observable<any> | any {
        return this.httpClient.post(FILES_URL, formData);
    }
}
