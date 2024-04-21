import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    // this.test();

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
      username: new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$|^[0-9]{11}$')
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.minLength(8),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')
        ]
      ),
    });
  }



  onSubmit() {
    console.log(`Form Data:`, this.dataForm.value);
    this.router.navigate([this.navigateFrom ? this.navigateFrom : '/account']);

  }

  /**
   * Form Validations
   */
  get username() {
    return this.dataForm.get('username');
  }


  get password() {
    return this.dataForm.get('password');
  }

  /**
   * NAVIGATION
   */
  onRegistrationNavigate() {
    if (this.navigateFrom) {
      this.router.navigate(['/registration'], {
        queryParams: {navigateFrom: this.navigateFrom},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['/registration']);
    }
  }


}
