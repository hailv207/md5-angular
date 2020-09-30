import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path:'users/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'users/delete/:id',
    component: DeleteUserComponent
  },
  {
    path: 'users/create',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
