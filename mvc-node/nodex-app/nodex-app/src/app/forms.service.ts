import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class FormsService {


  Url = "http://localhost:3000/api"

  constructor(private http: Http) { }


  getAllUsers() {
    return this.http.get(this.Url)
      .map(res => res.json());
  }

  getUserById(userId) {
    console.log(this.Url + "/edit/" + userId);
    return this.http.get(this.Url + "/edit/" + userId)
      .map(res => res.json());
  }

  createUser(user) {
    //console.log(user + 'service ');
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.Url, user, options)
      .map(success => success.status)
  }

  updateUser(user) {
    //console.log(user + 'service create');
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.Url + "/" + user._id, user, options)
      .map(success => success.status);
  }
  deleteUserById(userId) {
   // console.log(userId+'  working')
    return this.http.delete(this.Url + "/" + userId)
      .map(success => success.status);
  }
  createAdmin(regUser) {
    //console.log(user + 'service ');
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.Url+"/admin", regUser, options)
      .map(success => success.status)
  }
}

