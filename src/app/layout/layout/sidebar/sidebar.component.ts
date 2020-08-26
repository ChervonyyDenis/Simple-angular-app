import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems = [
    {name: 'Dashboard', link: 'dashboard'},
    {name: 'Feedback', link: 'feedback'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
