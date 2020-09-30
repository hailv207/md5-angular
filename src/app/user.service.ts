import {Injectable} from '@angular/core';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {id: 1, name: 'Hai', address: 'HN'},
    {id: 2, name: 'Tung', address: 'TN'},
    {id: 3, name: 'Quynh', address: 'TH'},
  ];

  private currentId = 3;

  getUserById(id: number): IUser {
    let u: IUser;
    for (let i = 0; i < this.users.length; i++) {
      let u = this.users[i];
      if (u.id === id) {
        return u;
      }
    }
    return null;
  }

  getAllUsers(): IUser[] {
    return this.users;
  }

  isExistedId(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if (id === user.id) {
        return true;
      }
    }
    return false;
  }

  saveUser(u: IUser) {
    if (this.isExistedId(u.id)) {
      let user = this.getUserById(u.id);
      user.name = u.name;
      user.address = u.address;
    } else {
      u.id = ++this.currentId;
      this.users.push(u);
    }
  }

  deleteUserById(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      let u = this.users[i];
      if (u.id === id) {
        this.users.splice(i, 1);
        return;
      }
    }
  }

  constructor() {
  }
}
