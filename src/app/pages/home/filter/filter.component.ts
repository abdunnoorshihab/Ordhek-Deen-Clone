import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {

  filterForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.filterForm = this.fb.group({
      gender: [''],
      status: [''],
      address: [''],
    })
  }

  filterSubmit() {
    if (this.filterForm.valid) {
      console.log(this.filterForm.value);
    }
  }

}
