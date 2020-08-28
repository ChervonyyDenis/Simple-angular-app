import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '@shared/services/notifications.service';
import {Notification, NotificationType} from '@shared/services/notifications.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notifications = [];

    this.notificationsService.subject.subscribe((notification) => {
      if (this.notifications.length === 3) {
        this.notifications.pop();
      }

      this.notifications.unshift(notification);

      setTimeout(() => {
        this.notifications = this.notifications.filter(next => {
          return next !== notification;
        });
      }, 4000);
    });
  }

  public addClass(notification: Notification): string {
    if (!notification) {
      return;
    }
    switch (notification.type) {
      case NotificationType.Success:
        return 'status-success';
      case NotificationType.Error:
        return 'status-error';
      case NotificationType.Info:
        return 'status-info';
      case NotificationType.Warning:
        return 'status-warning';
    }
  }
}
