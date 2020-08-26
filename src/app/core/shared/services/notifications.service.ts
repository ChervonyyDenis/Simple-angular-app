import {Injectable} from '@angular/core';
import {Notification, NotificationType} from '@shared/services/notifications.model';
import {Subject} from 'rxjs';

@Injectable()

export class NotificationsService {
  public subject = new Subject<Notification>();

  constructor() { }

  public success(message: string): void {
    this.showNotification(NotificationType.Success, message);
  }

  public error(message: string): void {
    this.showNotification(NotificationType.Error, message);
  }

  public info(message: string): void {
    this.showNotification(NotificationType.Info, message);
  }

  public warning(message: string): void {
    this.showNotification(NotificationType.Warning, message);
  }

  private showNotification(type: NotificationType, message: string): void {
    this.subject.next({ type, message } as Notification);
  }
}
