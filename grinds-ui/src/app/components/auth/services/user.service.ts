import { Injectable } from '@angular/core';
import { GrindService } from 'src/app/services/grind.service';
import { User } from 'src/app/models/User';

@Injectable()
export class UserService {

  constructor( private appService: GrindService) { }

  public register(user: User) {
      this.appService.registerUser(user);
  }
}
