import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path:'edit/:id',
    component: EditUserComponent
  },
  {
    path: 'delete/:id',
    component: DeleteUserComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
