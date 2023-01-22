import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  confirmPass: string = 'none';
  CPWD: any;
  show: boolean = false;

  constructor() {}
  // click event function toggle
password() {
  this.show = !this.show;
}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z.-]{2,30}$/),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z.-]{2,30}$/),
    ]),
    email: new FormControl('', [
      Validators.required,
       Validators.pattern(/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/)
      ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%^&*]{8,15})$/)
    ]),
    cpwd: new FormControl(''),
  });

  registerSubmited() {
    if(this.PWD.value == this.CPWD.value){
      console.log(this.registerForm.valid);
      this.confirmPass = 'none'
    }else{
      this.confirmPass = 'inline'
    }
   
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Phone(): FormControl {
    return this.registerForm.get('phone') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get ConfirmPassword(): FormControl {
    return this.registerForm.get('cpwd') as FormControl;
  }
}
