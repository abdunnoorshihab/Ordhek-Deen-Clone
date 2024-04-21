import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      permanentAddress: ['', Validators.required],
      presentAddress: ['', Validators.required],
      originCity: ['', Validators.required]
    })
  }

  addressSubmit() {
      console.log(this.addressForm.value);
      this.router.navigate(['/account/edu-qual'])
  }
}
