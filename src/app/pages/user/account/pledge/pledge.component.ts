import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Dashboard } from 'src/app/interfaces/common/dashboard.interface';
import { DASHBOARD_DB } from 'src/app/core/db/dashboard.db';


@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.scss'],
})
export class PledgeComponent implements OnInit {
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.initDataForm();
  }
  initDataForm(): void {
    this.dataForm = this.fb.group({
      permission: [''],
      truth: [''],
      confirmation: [''],
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
