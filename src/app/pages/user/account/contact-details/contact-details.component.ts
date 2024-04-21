import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/core/ui.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
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
      groomName: ['', Validators.required],
      guardiansMobile: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', Validators.email],
      reason: ['', Validators.required],
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

    console.log("data", this.dataForm.value)
    // this.formElement.resetForm();
    this.uiService.success('Success! Contact data submitted.')
  }
}
