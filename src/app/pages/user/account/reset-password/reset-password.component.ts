import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
  constructor(private fb:FormBuilder) {
  }
  ngOnInit() {

  }

  ResetPasswordForm =   this.fb.group({
    newPass:new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPass:new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  handleResetPasswordForm (){
    console.log(this.ResetPasswordForm.value)
  }
}
