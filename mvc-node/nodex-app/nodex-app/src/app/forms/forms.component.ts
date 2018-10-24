import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormsService } from '../forms.service';
import {TooltipPosition} from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormsComponent implements OnInit {

  posts: any = [];
  genders: string[] = ['Male', 'Female', 'Others'];

  statusCode: number;


  constructor(private formservice: FormsService, private route: ActivatedRoute, private router: Router) { }

  empid: string = this.route.snapshot.paramMap.get('_id');

  userForm = new FormGroup({
    firstname: new FormControl('',[ Validators.required, Validators.pattern("[a-zA-Z ]*")]),
    lastname: new FormControl('', [ Validators.required, Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl('', [ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    dob: new FormControl('', Validators.required),
    phone: new FormControl('',  [ Validators.pattern("[0-9]{10,10}"), Validators.required]),
    gender: new FormControl('', Validators.required),

  });


  ngOnInit() {
    // console.log(this.empid);
    if (this.empid != null) {
      this.loadUserToEdit(this.empid);
      console.log(this.empid);
    }
  }



  getAllUsers() {
    this.formservice.getAllUsers().subscribe(
      data => this.posts = data
    );
  }

  loadUserToEdit(userId) {
    this.formservice.getUserById(userId)
      .subscribe(user => {

        this.userForm.setValue({
          firstname: user.firstname, lastname: user.lastname, dob: user.dob,
          email: user.email, phone: user.phone, gender: user.gender
        });
      })
  }

  onFormSubmit() {

    let user = this.userForm.value;

    if (this.empid == null) {
     // console.log(user + 'iff');
      this.formservice.createUser(user)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllUsers();
          this.router.navigate(['/userdata']);
          
        },
          errorCode => this.statusCode = errorCode
        );
     	
    }
    else {
      //console.log(user + 'else');
      user._id = this.empid;
      this.formservice.updateUser(user).
        subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllUsers();
          this.router.navigate(['/userdata']);
        },
          errorCode => this.statusCode = errorCode);
    }
  }




}
     










