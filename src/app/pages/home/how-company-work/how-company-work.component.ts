import { Component, Input } from '@angular/core';
import { UserGuide } from 'src/app/interfaces/common/user-guide.interface';

@Component({
  selector: 'app-how-company-work',
  templateUrl: './how-company-work.component.html',
  styleUrls: ['./how-company-work.component.scss']
})
export class HowCompanyWorkComponent {
  @Input() data: UserGuide[] = [];
}
