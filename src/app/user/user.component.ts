import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    response: any;

    constructor(private userService: UserService) {
        this.getAllUsers();
    }

    getAllUsers() {
        this.userService.findAllUser().subscribe(data => {
            this.response = data.data;
        });
    }

    ngOnInit(): void {
    }

}
