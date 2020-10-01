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
        this.userService.getUserById(id).subscribe(u => {
            this.user.id = u.data.id;
            this.user.name = u.data.name;
            this.user.address = u.data.address;
        });
    }

    deleteUser() {
        this.userService.deleteUserById(this.user.id).toPromise().then(()=>{
            this.router.navigate(['/users']);
        });
    }

    ngOnInit(): void {
        let id = this.activatedRoute.snapshot.params.id;
        this.setUser(id);
    }

}
