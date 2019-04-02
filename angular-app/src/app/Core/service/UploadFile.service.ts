
import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from 'src/environments/environment';
@Injectable()
export class UploadFileService {
  constructor(private http: HttpClient) {}
  pushFileToStorage(file: File, articleId: any): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('articleID',articleId);
    const req = new HttpRequest('POST',environment.url +'/Files', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }
}