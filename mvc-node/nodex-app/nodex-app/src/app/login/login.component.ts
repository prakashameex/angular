import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { FormsService } from '../forms.service';
import { AuthenticationService, TokenPayload } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    username: '',
    password: ''
  };
  statusCode: number;

  constructor(private auth: AuthenticationService, private router: Router,private formservice: FormsService) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',  Validators.required),
  
  });
  registerForm = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cpass: new FormControl('',[Validators.required, Validators.minLength(8)]),
  
  });

  // ,{Validator: this.checkIfMatchingPasswords('pass','cpass')}
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  ngOnInit() {
  }
  onloginFormSubmit()
  {
    console.log('login submit working')

    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
  onregisterFormSubmit()
  {
    // console.log(this.registerForm.value);
    // let regUser=this.registerForm.value;
    // this.formservice.createAdmin(regUser)
    // .subscribe(successCode => {
    //   this.statusCode = successCode;
    //   //this.getAllUsers();
    //   this.router.navigate(['/login']);
      
    // },
    //   errorCode => this.statusCode = errorCode
    // );
   
    // console.log('register submit working')
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
