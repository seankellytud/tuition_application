import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { GrindService } from 'src/app/services/grind.service';


@Injectable()
export class RegisterService {

  constructor( private grindService: GrindService ) { }


  registerUser(user: User): Observable<User> {
    return this.grindService.registerUser(user);
  }
  
  // deleteUser(user:User): Observable<void>{
  //   return this.grindService.deleteUser(user);
  // } ##############Trying to add a delete user function
}
