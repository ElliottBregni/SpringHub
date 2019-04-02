import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Core/service';
import { Profile } from 'src/app/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor( private apiService: ApiService) { }

  get(username: string): Observable<Profile> {
    return this.apiService.get('/profiles/' + username)
      .pipe(map((data: {profile: Profile}) => data.profile));
  }

  follow(username: string): Observable<Profile> {
    return this.apiService.post('/profiles/' + username + '/follow');
  }

  unfollow(username: string): Observable<Profile> {
    return this.apiService.delete('/profiles/' + username + '/follow');
  }
}
