import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, of } from 'rxjs';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import{task} from './form/form';  
@Injectable()
export class FormserviceService {
  constructor(private http: Http) {
    console.log('Task Service Initialized...');
  }

  getTasks() {
    console.log('chk')
    return this.http.get('http://localhost:4201/api/tasks').map(Response=>Response.json())
        }

  // addTask(newTask) {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('/api/task', JSON.stringify(newTask), { headers: headers })
  //     .map((response) => response['_body'] as task[]);
  // }

  // deleteTask(id) {
  //   return this.http.delete('/api/task/' + id)
  //     .map((response) => response['_body'] as task[]);
  // }

  // updateStatus(task) {
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.put('/api/task/' + task._id, JSON.stringify(task), { headers: headers })
  //     .map((response) => response['_body'] as task[]);
  // }
}