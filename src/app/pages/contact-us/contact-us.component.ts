import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UiService} from '../../services/core/ui.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  // Data Form
  @ViewChild('formElement') formElement: NgForm;
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
      phoneNo: ['', Validators.required],
      address: ['', Validators.required],
      message: ['', Validators.required],
      
    });
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field.')
      return;
    }
    this.formElement.resetForm();
    this.uiService.success('Success! Contact data submitted.')
  }


}
