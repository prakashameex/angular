import { Component, OnInit } from '@angular/core';
import{task} from './form';
import {FormserviceService} from '../formservice.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    tasks: task[];
    title: string;
  constructor(private taskService:FormserviceService) {
      
    this.taskService.getTasks()
            .subscribe(tasks => {
                //this.tasks = tasks;
                console.log(tasks)
          });
   }

  ngOnInit() {

  }

}
