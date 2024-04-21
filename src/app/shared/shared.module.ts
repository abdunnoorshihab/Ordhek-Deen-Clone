import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackbarNotificationComponent} from './components/ui/snackbar-notification/snackbar-notification.component';
import {MessageDialogComponent} from './components/ui/message-dialog/message-dialog.component';
import {ConfirmDialogComponent} from './components/ui/confirm-dialog/confirm-dialog.component';
import {FormsModule} from '@angular/forms';
import {
  ConfirmDialogWithCheckComponent
} from './components/ui/confirm-dialog-with-check/confirm-dialog-with-check.component';
import {OutSideClickDirective} from './directives/out-side-click.directive';
import {ImageLoadErrorDirective} from './directives/image-load-error.directive';
import {NgModelChangeDebouncedDirective} from './directives/ng-model-change.directive';
import {ImageProfileErrorDirective} from './directives/image-profile-error.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SnackbarNotificationComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    ConfirmDialogWithCheckComponent,
    OutSideClickDirective,
    ImageLoadErrorDirective,
    ImageProfileErrorDirective,
    NgModelChangeDebouncedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    SnackbarNotificationComponent,
    MessageDialogComponent,
    ConfirmDialogComponent,
    OutSideClickDirective,
    ImageLoadErrorDirective,
    ImageProfileErrorDirective,
    NgModelChangeDebouncedDirective
  ],
  providers: []
})
export class SharedModule {
}
