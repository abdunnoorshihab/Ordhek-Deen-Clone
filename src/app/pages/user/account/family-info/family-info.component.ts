import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/core/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss']
})
export class FamilyInfoComponent {
    // Data Form
    @ViewChild('formElement') formElement: NgForm;
    dataForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private uiService: UiService,
      private router: Router
    ) {}

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
      fatherName: ['', Validators.required],
      fatherAlive: ['', Validators.required],
      fatherProfession: ['', Validators.required],

      motherName: ['', Validators.required],
      motherAlive: ['', Validators.required],
      motherProfession: ['', Validators.required],

      brotherCount: ['',Validators.required],
      sisterCount: ['',Validators.required],
      uncleProfession: ['',Validators.required],

      
      financialStatus:['',Validators.required],
      financialDescription:['',Validators.required],
      religiousCondition:['',Validators.required]

    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field.')
      return;
    }
    console.log("DATAFORM:",this.dataForm.value);
    this.formElement.resetForm();
    this.router.navigate(['/account/personal-info'])
    this.uiService.success('Success! Contact data submitted.')
  }
}
