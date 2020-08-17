import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/modules/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class AuthenticationModule {}
