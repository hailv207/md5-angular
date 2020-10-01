import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    formGroup: FormGroup;

    constructor(private userService: UserService,
                private router: Router,
                private formBuilder: FormBuilder) {

    }

    saveUser() {
        let data = {
            name: this.formGroup.get('name').value,
            address: this.formGroup.get('address').value
        };
        if (this.formGroup.valid) {
            this.userService.createUser(data).toPromise()
                .then(() => {
                    this.router.navigate(['/users']);
                });

        }
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group(
            {
                name: ['', [Validators.required]],
                address: ['', [Validators.required]]
            }
        );
    }

}
