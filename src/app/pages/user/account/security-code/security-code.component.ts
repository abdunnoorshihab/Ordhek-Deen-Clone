import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.scss']
})
export class SecurityCodeComponent implements OnInit{
  constructor(private fb:FormBuilder) {
  }
  ngOnInit() {
  }
  SecurityCodeForm =   this.fb.group({
    code:new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  handleSecurityCode (){
    console.log(this.SecurityCodeForm.value)
  }
}
