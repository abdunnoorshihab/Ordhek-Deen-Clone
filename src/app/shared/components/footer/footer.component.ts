import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UiService} from '../../../services/core/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  dataForm: FormGroup;


  address: string[] = [];
  phones: string[] = [];
  emails: string[] = [];

  // Year Data
  currentYear: any = new Date().getFullYear();


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private uiService: UiService,
  ) {
  }


  ngOnInit(): void {
    // Init data form
    this.initDataForm();
  }

  /**
   * FORM CONTROL
   * initDataForm()
   * onSubmit()
   */
  private initDataForm() {
    this.dataForm = this.fb.group({
      email: ['', Validators.email],
    });
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please Enter Your Email Address.')
      return;
    }
    this.formElement.resetForm();
    this.uiService.success('Success! Newsletter added.')
  }

}
