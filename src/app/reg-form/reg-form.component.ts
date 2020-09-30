import { Component, OnInit } from '@angular/core';
import {newArray} from '@angular/compiler/src/util';
enum genderList{
  'Male',
  'Female'
}
interface IUser{
  id: number;
  email: string;
  password: string;
  country: string;
  age: number;
  gender: string;
  phone: genderList;
}

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {
  users: Array<IUser>[];

  constructor() { }

  ngOnInit(): void {
  }

}
