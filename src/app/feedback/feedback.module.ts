import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/modules/shared.module';
import {FeedbackComponent} from '@feedback/feedback/feedback.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedbackComponent
  }
];

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule { }
