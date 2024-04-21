import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expected-life-partner',
  templateUrl: './expected-life-partner.component.html',
  styleUrls: ['./expected-life-partner.component.scss']
})
export class ExpectedLifePartnerComponent implements OnInit {
  expectedPartnerForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.expectedPartnerForm = this.fb.group({
      lowerAge: ['', Validators.required],
      upperAge: ['', Validators.required],
      complexion: ['', Validators.required],
      height: ['', Validators.required],
      qualification: ['', Validators.required],
      district: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      profession: ['', Validators.required],
      financialCondition: ['', Validators.required],
      expectedQualities: ['', Validators.required],
      familyFinance: ['', Validators.required]
    })

  }

  expectedPartnerSubmit() {
      console.log(this.expectedPartnerForm.value);
      this.router.navigate(['/account/pledge'])
  }

}
