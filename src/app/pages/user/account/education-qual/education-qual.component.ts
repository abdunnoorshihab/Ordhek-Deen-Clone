import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-qual',
  templateUrl: './education-qual.component.html',
  styleUrls: ['./education-qual.component.scss']
})
export class EducationQualComponent implements OnInit {
  eduQualForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.eduQualForm = this.fb.group({
      eduMethod: ['', Validators.required],
      islamicTitles: ['']
    })
  }

  eduQualSubmit() {
      console.log(this.eduQualForm.value);
      this.router.navigate(['/account/edu-info'])
  }
}
