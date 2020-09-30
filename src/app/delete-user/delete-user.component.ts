import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  user: IUser = {
    id: 0,
    name: '',
    address: ''
  };

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  setUser(id: number) {
    let u = this.userService.getUserById(id);
    this.user.id = u.id;
    this.user.name = u.name;
    this.user.address = u.address;
  }

  deleteUser() {
    this.userService.deleteUserById(this.user.id);
    this.router.navigate(['/']);
    console.log(this.user);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let id = +paramMap.get('id');
      this.setUser(id);
    });
  }

}
