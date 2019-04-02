import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Core/service';
import { Profile } from 'src/app/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private apiService: ApiService,private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  get(): Observable<any> {
    console.log(environment.api_url);
    return this.http.get(`${environment.api_url}Category/`);
  }

}
