import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UiService} from 'src/app/services/core/ui.service';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss']
})
export class SocialShareComponent {
  @ViewChild('scroll', {static: false}) scrollElement: ElementRef;
  public scrollValue = 0;
  url: string = " ";
  navUrl: any;

  constructor(
    private uiService: UiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.url = window.location.protocol + '//' + window.location.host + window.location.pathname;
  }

  /**
   * SOCIAL SHARE CONTROLL
   * public nextSlide()
   * public prevSlide()
   * onCopy()
   */


  public nextSlide() {
    let scrollEl = this.scrollElement.nativeElement as HTMLElement;
    if (this.scrollValue < 480) {
      this.scrollValue += 90;
    }
    scrollEl.scrollLeft = this.scrollValue;
  }

  public prevSlide() {
    let scrollEl = this.scrollElement.nativeElement as HTMLElement;
    if (this.scrollValue > 0) {
      this.scrollValue -= 90;
    }
    scrollEl.scrollLeft = this.scrollValue;
  }

  public onCopy(url: string) {
    if (url) {
      window.navigator.clipboard.writeText(url).then((res) => {
        this.uiService.success('Link Successfully Coppied');
      })
    }
  }

  createNavigationUrl(type: any) {
    let encodeUrl = encodeURIComponent(this.url);
    switch (type) {
      case 'facebook':
        this.navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeUrl;
        break;
      case 'twitter':
        this.navUrl = 'https://twitter.com/share?url=' + encodeUrl;
        break;
      case 'instagram':
        this.navUrl = 'https://www.instagram.com/sharer/sharer.php?u=' + encodeUrl;
        break;
      case 'whatsapp':
        this.navUrl = 'https://web.whatsapp.com/send?text=' + encodeUrl;
        break;
      case 'linkedin':
        this.navUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeUrl;
        break;
      case 'pinterest':
        this.navUrl = 'https://www.pinterest.com/pin/create/button/?url=' + encodeUrl;
        break;
    }
    return window.open(this.navUrl, '_blank');
  }

  //Email Sharing
  shareBlogByEmail(blogTitle: string, blogUrl: any) {
    var subject = encodeURIComponent("Check out this blog: " + blogTitle);
    var body = encodeURIComponent("Hey,\n\nI found this interesting blog and thought you might like it:\n\n" + blogUrl);
    var mailtoLink = "mailto:?subject=" + subject + "&body=" + body;
    window.open(mailtoLink);
  }
}
