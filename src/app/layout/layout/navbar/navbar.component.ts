import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navItems = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.router.navigateByUrl('/login');
  }

}
