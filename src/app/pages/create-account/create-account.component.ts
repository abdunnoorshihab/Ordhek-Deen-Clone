
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UiService} from '../../services/core/ui.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  dataForm: FormGroup;
  // formElement: any;

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
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      
      confirmPass: ['', Validators.required],
      
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
