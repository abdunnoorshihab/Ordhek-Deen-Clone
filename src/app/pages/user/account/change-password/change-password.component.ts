import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UiService} from '../../../../services/core/ui.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  // Data Form
  @ViewChild('formDirective') formDirective: NgForm;
  public dataForm: FormGroup;


  constructor(
    private uiService: UiService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      oldPassword: [null, Validators.required],
      password: [null, Validators.required]
    });
  }


  /**
   * On submit
   * onSubmitForm()
   */
  onSubmitForm() {
    if (this.dataForm.invalid) {
      return;
    }

    if (this.dataForm.value.password.length < 6) {
      this.uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    this.formDirective.resetForm();
    this.uiService.success('Success! Password updated.')


  }


}
