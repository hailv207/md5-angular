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
  user: IUser;
  formGroup: FormGroup;

  saveUser() {
    if (this.formGroup.valid) {
      this.user.name = this.formGroup.get('name').value;
      this.user.address = this.formGroup.get('address').value;
      this.userService.saveUser(this.user);
      this.router.navigate(['/']);
    }
  }

// getNameValidateErrors

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let id = +paramMap.get('id');
      this.user = this.userService.getUserById(id);
    });

    this.formGroup = this.formBuilder.group(
      {
        name: [this.user.name, [Validators.required]],
        address: [this.user.address, [Validators.required]]
      }
    );

  }

}
