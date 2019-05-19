import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthGuard } from 'app/shared/services/auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('datagauge19@gmail.com', Validators.required),
      password: new FormControl('manideep', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {  
    const signinData = this.signinForm.value
    console.log(signinData);
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    if(signinData.username == 'datagauge19@gmail.com' && signinData.password == 'manideep'){
      //this.router.navigate(['others/blank']);
      //this.router.navigate(['/others/blank']);
      //this.router.navigate(['/../others/blank']);
      //this.router.navigate(['./../others/blank']);
      //this.router.navigate(['../../others/blank']);
      this.router.navigate(['/../../others/blank']);
    }else{
      return false;
    }
  }

}
