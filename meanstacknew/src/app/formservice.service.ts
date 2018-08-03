import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable, of } from 'rxjs';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import{task} from './form/form';  
@Injectable()
export class FormserviceService {
    
         headers = new Headers();
         arr_service:any;
  constructor(private http: Http) {
    console.log('Task Service Initialized...');
  }

  getTasks() {
    console.log('chk')
    return this.http.get('http://localhost:4201/api/tasks').map(Response=>Response.json())
        }

  addTask(newTask) {
    console.log('service value',newTask)
    this.headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4201/api/tasks', JSON.stringify(newTask), { headers: this.headers }).map(Response=>Response.json());
  }

  delete(id) {
console.log('dele:http://localhost:4201/api/task/'+id)
    return this.http.delete('http://localhost:4201/api/task/'+id, { headers: this.headers }).map(Response=>Response.json()); 
    
  }

  tableedit(id) {
 return this.http.get('http://localhost:4201/api/task/'+id).map(Response=>Response.json());  
}
update(up_value,id){
  console.log('id',id)
  console.log('update cal',up_value)
 return this.http.put('http://localhost:4201/api/task/'+id, up_value, { headers: this.headers }).map(Response=>Response.json());    
}
}