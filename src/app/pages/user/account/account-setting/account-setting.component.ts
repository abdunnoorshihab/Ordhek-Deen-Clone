import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { UiService } from 'src/app/services/core/ui.service';


@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent {

  dataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
  ) {
  }

  ngOnInit(): void {
    this.initDataForm();
  }
  private initDataForm() {
    this.dataForm = this.fb.group({
      // name: ['', Validators.required],
      // email: ['', Validators.email],
      oldpassword: ['', Validators.required],
      password: ['', Validators.required],
      
      confirmPassword: ['', Validators.required],
      
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
