import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit{
 constructor(private fb:FormBuilder, private router: Router) {
 }
 ngOnInit(){

 }
addPersonalInfo = this.fb.group({
  clothes: new FormControl('', [Validators.required, Validators.minLength(3)]),
  beard:new FormControl('', [Validators.required, Validators.minLength(3)]),
  prayer:new FormControl('', [Validators.required, Validators.minLength(3)]),
  qazaWaqt:new FormControl('', [Validators.required, Validators.minLength(3)]),
  ankleClotes:new FormControl('', [Validators.required, Validators.minLength(3)]),
  mahram:new FormControl('', [Validators.required, Validators.minLength(3)]),
  recitation:new FormControl('', [Validators.required, Validators.minLength(3)]),
  fiqh:new FormControl('', [Validators.required, Validators.minLength(3)]),
  dramas:new FormControl('', [Validators.required, Validators.minLength(3)]),
  disease:new FormControl('', [Validators.required, Validators.minLength(3)]),
  specialWork:new FormControl('', [Validators.required, Validators.minLength(3)]),
  mazarBelief:new FormControl('', [Validators.required, Validators.minLength(3)]),
  books:new FormControl('', [Validators.required, Validators.minLength(3)]),
  scholars:new FormControl('', [Validators.required, Validators.minLength(3)]),
  category:new FormControl('', [Validators.required, Validators.minLength(3)]),
  description:new FormControl('', [Validators.required, Validators.minLength(3)]),
  mobileNo:new FormControl('', [Validators.required, Validators.minLength(3)]),
  // photo:new FormControl('', [Validators.required, Validators.minLength(3)]),



})

  handlePersonalInfo(){
    console.log(this.addPersonalInfo.value)
    this.router.navigate(['/account/edit-bio/occupation-info'])
  }


}
