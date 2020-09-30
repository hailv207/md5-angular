import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.formGroup = formBuilder.group([
    //   {
    //     name: ['', [Validators.required]]
    //   }
    // ]);
  }


  ngOnInit(): void {
  }

}
