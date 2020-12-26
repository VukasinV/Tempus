import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService, private auth: AuthService) {}

  // TODO: model user
  createUser(user: any) {
    return this.apiService.post('/users', user);
  }

  login(username: string, password: string) {
    return this.apiService.post('/auth', { username, password }).pipe(
      // TODO: type response
      tap((response: any) => {
        this.auth.saveToken(response.token);
      })
    );
  }
}
