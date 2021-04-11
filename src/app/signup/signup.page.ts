import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
name: string = "";
email: string = "";
password: string = "";
passwordconfirm: string = "";


  constructor(
    private router: Router) { 
  }

  ngOnInit() {
  }

 
      
  }

