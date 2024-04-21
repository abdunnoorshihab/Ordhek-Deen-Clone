import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  dataForm?: FormGroup;

  navigateFrom: string = null;


  constructor(
    private fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    // Init Data Form
    this.initDataForm();

    this.activatedRoute.queryParamMap.subscribe(param => {
      if (param.get('navigateFrom')) {
        this.navigateFrom = param.get('navigateFrom');
      }
    });
  }

  /**
   * FORM FUNCTIONS
   * initDataForm()
   * onSubmit()
   */
  private initDataForm() {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      phoneNo: new FormControl(
        {value: null, disabled: false},
        [
          Validators.minLength(11),
          Validators.required
        ]
      ),
      // email: [null, Validators.email],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      isAccept: [null, Validators.required],
      hasAccess:[true]
    });
  }

  onSubmit() {
    this.router.navigate(['/','login']);

  }

  /**
   * Form Validations
   */
  get name() {
    return this.dataForm.get('name');
  }

  get phoneNo() {
    return this.dataForm.get('phoneNo');
  }

  get password() {
    return this.dataForm.get('password');
  }

  get confirmPassword() {
    return this.dataForm.get('confirmPassword');
  }

  get isAccept() {
    return this.dataForm.get('isAccept');
  }

  /**
   * NAVIGATION
   */
  onRegistrationNavigate() {
    if (this.navigateFrom) {
      this.router.navigate(['/login'], {queryParams: {navigateFrom: this.navigateFrom}, queryParamsHandling: 'merge'});
    } else {
      this.router.navigate(['/login']);
    }
  }


}
