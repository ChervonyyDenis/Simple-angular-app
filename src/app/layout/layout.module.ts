import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/modules/shared.module';
import {LayoutComponent} from '@layout/layout/layout.component';
import {SidebarComponent} from '@layout/layout/sidebar/sidebar.component';
import {NavbarComponent} from '@layout/layout/navbar/navbar.component';
import {LayoutRoutingModule} from '@layout/layout-routing.module';
import { NotificationsComponent } from '@layout/layout/notifications/notifications.component';
import {NotificationsService} from '@shared/services/notifications.service';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    NotificationsComponent,
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  providers: [
    NotificationsService
  ]
})

export class LayoutModule {}
