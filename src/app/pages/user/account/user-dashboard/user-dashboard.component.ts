import { Component,Input } from '@angular/core';

import { Dashboard } from 'src/app/interfaces/common/dashboard.interface';
import { DASHBOARD_DB } from 'src/app/core/db/dashboard.db';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  @Input() dashboard: Dashboard[] = DASHBOARD_DB;
}
