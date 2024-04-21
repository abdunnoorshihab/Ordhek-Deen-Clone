import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.scss']
})
export class EducationalDetailsComponent implements OnInit{
  constructor(private fb:FormBuilder, private router: Router) {
  }
  ngOnInit() {
  }

  EducationalInformation = this.fb.group({
    educationType:new FormControl('', [Validators.required, Validators.minLength(3)]),
    secondaryPassingYear:new FormControl('', [Validators.required, Validators.minLength(3)]),
    group:new FormControl('', [Validators.required, Validators.minLength(3)]),
    result:new FormControl('', [Validators.required, Validators.minLength(3)]),
    diplomaSubject:new FormControl('', [Validators.required, Validators.minLength(3)]),
    higherInstitution:new FormControl('', [Validators.required, Validators.minLength(3)]),
    higherPassingYear:new FormControl('', [Validators.required, Validators.minLength(3)]),
    other:new FormControl('', [Validators.required, Validators.minLength(3)]),
    islamicTitle:new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  handleEducationalInfo(){
    console.log(this.EducationalInformation.value)
    this.router.navigate(['/account/family-info'])
  }
}
