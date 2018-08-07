import { Component, OnInit } from '@angular/core';
import { task } from './form';
import { FormserviceService } from '../formservice.service'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tasks: task[];
  title: string;
  arr_service: any = null
  fname: any
  lname: any
  dob: any
  gender: any
  phoneno: any
  constructor(private taskService: FormserviceService, private router: Router, private route: ActivatedRoute) {
    // this.route.params.subscribe( params => console.log(params.id));
    console.log(route.snapshot.params.id)
    this.taskService.tableedit(route.snapshot.params.id).subscribe(task => {
      this.arr_service = task;
      console.log('edited value', this.arr_service)
      if (this.arr_service!=null) {
        console.log(this.arr_service)
        this.fname = this.arr_service.fname;
        this.lname = this.arr_service.lname;
        this.dob = this.arr_service.dob;
        this.gender = this.arr_service.gender;
        this.phoneno = this.arr_service.phoneno;
      }
    });
  }
  ngOnInit() {
  }
  update(value1: any) {

    this.taskService.update(value1, this.route.snapshot.params.id).subscribe(task => {

    });
    this.router.navigate(['/']);
  }
  onClickSubmit(value: any) {
    if (!value) { return; }
    console.log('form value', value)
    this.router.navigate(['/']);
    // setTimeout(() => {  this.router.navigate(['/']);}, 1000);

    this.taskService.addTask(value).subscribe(task => {
      //this.tasks.push(value);
      console.log(task)
    });
  }

}
