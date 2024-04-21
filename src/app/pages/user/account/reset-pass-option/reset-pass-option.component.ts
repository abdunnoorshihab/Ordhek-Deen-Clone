import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-pass-option',
  templateUrl: './reset-pass-option.component.html',
  styleUrls: ['./reset-pass-option.component.scss']
})
export class ResetPassOptionComponent implements  OnInit{
  constructor(private fb:FormBuilder) {
  }
  ngOnInit() {
  }
  ResetPasswordOption =   this.fb.group({
    option:new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  handlePasswordOption (){
    console.log(this.ResetPasswordOption.value)
  }
}
