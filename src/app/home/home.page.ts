import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ClickMe() {
    // code for learnmore goes here
    this.router.navigate(["/about"]);
  }

  logMeOut() {
    // code for login goes here
    this.router.navigate(["/login"]);
  }


}


