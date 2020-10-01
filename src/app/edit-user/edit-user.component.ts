import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../iuser';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    constructor(private userService: UserService,
                private router: Router,
                private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute) {

    }

    user: IUser = {
        id: 0,
        name: '',
        address: ''
    };
    formGroup: FormGroup;

    saveUser() {
        if (this.formGroup.valid) {
            this.user.name = this.formGroup.get('name').value;
            this.user.address = this.formGroup.get('address').value;
            console.log(this.user);
            this.userService.editUser(this.user.id, this.user).toPromise().then(()=>{
                this.router.navigate(['/users']);
            });
        }
    }

// getNameValidateErrors

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            let id = +paramMap.get('id');
            this.formGroup = this.formBuilder.group(
                {
                    name: ['', [Validators.required]],
                    address: ['', [Validators.required]]
                }
            );
            this.userService.getUserById(id).subscribe(u => {
                console.log(u);
                this.user.id = u.data.id;
                this.user.name = u.data.name;
                this.user.address = u.data.address;
                this.formGroup.patchValue({
                    name: u.data.name,
                    address: u.data.address
                });
            });

        });

    }

}
