import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {
  generalInfoForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.generalInfoForm = this.fb.group({
      gender: ['', Validators.required],
      birthYear: ['', Validators.required],
      maritalStat: ['', Validators.required],
      height: ['', Validators.required],
      complexion: ['', Validators.required],
      weight: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      nationality: ['', Validators.required]
    })
  }

  generalInfoSubmit() {
      console.log(this.generalInfoForm.value);
      this.router.navigate(['/account/address'])
  }
}
