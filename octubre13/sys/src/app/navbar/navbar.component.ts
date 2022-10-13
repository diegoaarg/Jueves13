import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items:Array<string>=["Tickets","Store","Metal Map","About us","Contact"]

  constructor() { }

  ngOnInit(): void {
  }

}
