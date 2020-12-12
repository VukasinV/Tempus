import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  // TODO: model user
  createUser(user: any) {
    return this.apiService.post('/users', user);
  }
}
