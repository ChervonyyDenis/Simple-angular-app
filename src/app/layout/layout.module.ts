import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/modules/shared.module';
import {LayoutComponent} from '@layout/layout/layout.component';
import {SidebarComponent} from '@layout/layout/sidebar/sidebar.component';
import {NavbarComponent} from '@layout/layout/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class LayoutModule {
}
