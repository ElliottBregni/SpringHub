import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type': 'application/json',
    'reportProgress': 'true',
    'responseType': 'text'
  })
}; 
@Injectable({
  providedIn: 'root'
})
 
export class UploadFileService {
 
  constructor(private http: HttpClient) { }
 
  pushFileToStorage(file: File): Observable<any> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(environment.api_url + 'post', formdata, {
      reportProgress: true,
      responseType: 'text'});
  }
 
  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}