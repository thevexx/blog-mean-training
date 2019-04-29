import { Component, OnInit } from '@angular/core';
import { ApiLoginService } from '../shared/api-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message = '';
  strength = '';

  constructor(private apiService: ApiLoginService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
  }

  registerBtn() {
    this.message = ""
    if (this.registerForm.valid) {
      this.apiService.register(this.registerForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.message === 'ok') {
          console.log(jwt_decode(res.token))
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        } else {
          this.message = res.message;
        }
      })
    }
  }

  validatePassword(password) {
    const HTMLElement = document.getElementById('pwdVisibility').style.visibility = 'visible';
    var miniscule = /[a-z]/;
    var majuscule = /[A-Z]/;
    var chiffre = /[0-9]/;

    var score = 0;
    if (password.length < 8) {
      this.strength = 'invalid';
    } else {
      if (miniscule.test(password)) {
        score += 1;
      }
      if (majuscule.test(password)) {
        score += 1;
      }
      if (chiffre.test(password)) {
        score += 1;
      }
    }
    if (score === 0) {
      this.strength = 'invalid';
    } else if (score === 1) {
      this.strength = 'weak';
    } else if (score === 2) {
      this.strength = 'medium';
           } else {
      this.strength = 'strong';
           }
  }
}
