import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {UiService} from '../../../services/core/ui.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  public dataForm: FormGroup;


  constructor(
    private uiService: UiService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      password: [null],
      confirmPassword: [null],
    });
  }


  onSubmit(): void {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      this.uiService.warn('Please complete all the required field');
      return;
    }


    if (this.dataForm.value.password && this.dataForm.value.confirmPassword && this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    if (this.dataForm.value.password && this.dataForm.value.confirmPassword && this.dataForm.value.password !== this.dataForm.value.confirmPassword) {
      this.uiService.warn('Password and confirm password not matched!');
      return;
    }

    this.formElement.resetForm();
    this.uiService.success('Success! Password reset.')

  }


}
