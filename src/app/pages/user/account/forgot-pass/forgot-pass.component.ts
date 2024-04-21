import { Component ,OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements  OnInit{
  constructor(private fb:FormBuilder) {
  }
ngOnInit() {

}

ForgotPasswordForm =   this.fb.group({
  email:new FormControl('', [Validators.required, Validators.minLength(3)]),
})

  handleForgotPassword (){
    console.log(this.ForgotPasswordForm.value)
}

}
