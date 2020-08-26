import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '@shared/services/notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

  notification(type) {
    this.notifications[type]('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolorem doloribus enim excepturi fuga id maiores minima, molestiae neque nulla officiis provident reprehenderit saepe sequi tempora, ullam ut vero?');
  }
}
