import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegFormComponent} from './reg-form/reg-form.component';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UserFormComponent} from './user-form/user-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegFormComponent,
    UserComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
