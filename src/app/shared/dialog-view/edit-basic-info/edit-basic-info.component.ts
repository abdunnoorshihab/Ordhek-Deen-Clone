import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UiService} from '../../../services/core/ui.service';
import {Select} from '../../../interfaces/core/select';
import {GENDERS} from '../../../core/utils/app-data';

@Component({
  selector: 'app-edit-basic-info',
  templateUrl: './edit-basic-info.component.html',
  styleUrls: ['./edit-basic-info.component.scss']
})
export class EditBasicInfoComponent implements OnInit {

  // Data Form
  @ViewChild('formElement') formElement: NgForm;
  public dataForm: FormGroup;

  genders: Select[] = GENDERS;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    public dialogRef: MatDialogRef<EditBasicInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {

    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      email: null,
      gender: null,
    });

    this.setFormData();

  }

  private setFormData() {
    this.dataForm.patchValue(this.data);
  }

  /**
   * ON SUBMIT FORM
   */

  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required field');
      return;
    }

    this.uiService.success('Success! Data updated.');
    this.dialogRef.close();

  }

}
