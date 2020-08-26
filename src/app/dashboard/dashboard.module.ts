import { NgModule } from '@angular/core';
import {DashboardComponent} from '@dashboard/dashboard/dashboard.component';
import {SharedModule} from '@shared/modules/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
