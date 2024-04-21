import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UiService} from '../../services/core/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  dataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
  ) {
  }

  ngOnInit(): void {
    this.initDataForm();
  }

  /**
   * FORM CONTROL
   * initDataForm()
   * onSubmit()
   */
  private initDataForm() {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      // phoneNo: ['', Validators.required],
      // address: ['', Validators.required],
      // message: ['', Validators.required],
      // emailSent: [false],
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field.')
      return;
    }

    console.log("data",this.dataForm.value)
    // this.formElement.resetForm();
    this.uiService.success('Success! Contact data submitted.')
  }





}
