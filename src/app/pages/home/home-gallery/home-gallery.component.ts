import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss'],
})
export class HomeGalleryComponent {
  @ViewChild('galleryPop', { static: false }) galleryPop!: GalleryComponent;

  /**
   * SHOW GALLERY
   */
  onShowPop(index: any) {
    if (index > -1) {
      this.galleryPop.onShowGallery(index);
    }
  }

  dummyImage: any[] = [
    {
      id: '1',
      images: './assets/images/galery.png',
    },
    {
      id: '2',
      images: './assets/images/galery1.png',
    },
    {
      id: '3',
      images: './assets/images/Rectangle 22.png',
    },
    {
      id: '4',
      images: './assets/images/galery5.png',
    },
    {
      id: '5',
      images: './assets/images/galery4.png',
    },
    {
      id: '5',
      images: './assets/images/galery3.png',
    },
  ];
}
