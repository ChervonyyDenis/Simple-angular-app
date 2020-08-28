import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '@shared/services/notifications.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.notifications.success('Message sent successfully');
  }
}
