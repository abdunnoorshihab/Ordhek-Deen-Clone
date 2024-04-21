import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occupation-info',
  templateUrl: 'occupation-info.component.html',
  styleUrls: ['occupation-info.component.scss']
})
export class OccupationInfoComponent implements OnInit {
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    this.initDataForm();
  }

  initDataForm(): void {
    this.dataForm = this.fb.group({
      occupation: ['', Validators.required],
      professionDescription: [''],
      monthlyIncome: ['']
    });
  }

  onSubmit(): void {
    if (this.dataForm.valid) {
      console.log('Form Data:', this.dataForm.value);
      this.router.navigate(['/account/marriage-related-info']);
    } else {
      console.log('Form is invalid. Please fill all required fields.');
    }
  }
}





