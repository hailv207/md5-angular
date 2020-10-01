import {Injectable} from '@angular/core';
import {IUser} from './iuser';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUserById(id: number): Observable<any> {
        return this.httpClient.get<any>(API_URL + '/users/' + id);
    }

    editUser(id: number, user: any): Observable<any> {
        return this.httpClient.put<any>(API_URL + '/users/' + id + '/edit', user);
    }

    createUser(user: any): Observable<any> {
        return this.httpClient.post<any>(API_URL + '/users/create', user);
    }

    deleteUserById(id: number): Observable<any> {
        return this.httpClient.delete<any>(API_URL + '/users/' + id + '/delete');
    }


    constructor(private httpClient: HttpClient) {

    }

    findAllUser(): Observable<any> {
        return this.httpClient.get<any>(API_URL + '/users');
    }

}
