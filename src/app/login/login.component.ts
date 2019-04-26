import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  message = '';

  constructor(private apiService : ApiService,private router: Router) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  ngOnInit() {
  }
  loginBtn(){
    this.message = ''
    if(this.loginForm.valid){
      this.apiService.login(this.loginForm.value).subscribe((res:any) =>{
        console.log(res);
        if(res.message === 'ok'){
          // redirection
         // console.log( jwt_decode(res.token))
          localStorage.setItem('token', res.token);
          this.router.navigate(['/to-do-list']);

        } else{
          this.message = res.message;
        }
      })
    }
  }
}
