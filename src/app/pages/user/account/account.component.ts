import {BreakpointObserver} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {UiService} from '../../../services/core/ui.service';
import {ImageCropComponent} from './image-crop/image-crop.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // Image Upload
  imageChangedEvent: any = null;
  imgPlaceHolder = 'assets/images/avatar/alexander-timper.webp';

  pickedImage?: any;
  file: any = null;
  newFileName: string;

  imgBlob: any = null;

  // BREAKPOINTS
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 599px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private uiService: UiService,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {

  }


  /**
   * ON IMAGE PICK
   * fileChangeEvent()
   * removeImageFiles()
   */

  fileChangeEvent(event: any) {
    this.file = (event.target as HTMLInputElement).files[0];
    // File Name Modify...
    const originalNameWithoutExt = this.file.name.toLowerCase().split(' ').join('-').split('.').shift();
    const fileExtension = this.file.name.split('.').pop();
    // Generate new File Name..
    this.newFileName = `${Date.now().toString()}_${originalNameWithoutExt}.${fileExtension}`;

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = () => {
      this.imgPlaceHolder = reader.result as string;
    };

    // Open Upload Dialog
    if (event.target.files[0]) {
      this.openComponentDialog(event);
    }

    // NGX Image Cropper Event..
    this.imageChangedEvent = event;
  }


  /**
   * OPEN COMPONENT DIALOG
   * openComponentDialog()
   */
  public openComponentDialog(data?: any) {
    const dialogRef = this.dialog.open(ImageCropComponent, {
      data,
      panelClass: ['theme-dialog'],
      autoFocus: false,
      disableClose: true,
      width: '680px',
      minHeight: '400px',
      maxHeight: '600px'
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        if (dialogResult.imgBlob) {
          this.imgBlob = dialogResult.imgBlob;
        }
        if (dialogResult.croppedImage) {
          this.pickedImage = dialogResult.croppedImage;
          this.imgPlaceHolder = this.pickedImage;

        }
      }
    });
  }


  onLogout() {
    this.router.navigate(['/login']);
  }


  onLinkChange() {
    this.isHandset$.subscribe((isHandset) => {
      if (isHandset) {
        const element = document.getElementById('main-sidebar-container-area');
        setTimeout(() => {
          window.scrollTo({
            left: 0,
            top: element.scrollHeight,
            behavior: 'smooth'
          });
        }, 150);
      }
    });
  }


}
