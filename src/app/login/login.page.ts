import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  
  validationUserMessage ={
    email:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"}
    ],
    password:[
      {type:"required", message:"please Enter your Password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ]
  }

  validationFormUser: FormGroup;

  constructor(private router: Router, public formbuider: FormBuilder, public authservice: AuthService,
    private nav: NavController,  private firestore: AngularFirestore) { }

  ngOnInit() {
    this.validationFormUser = this.formbuider.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }


  LoginUser(value){
    console.log("Am logged in");
    try{
      this.authservice.loginFireauth(value).then( resp =>{
        console.log(resp);
        this.router.navigate(['home'])

        if(resp.user){

          const userProfile = this.firestore.collection('profile').doc(resp.user.uid);

          userProfile.get().subscribe( result =>{
            if(result.exists) {
              this.nav.navigateForward(['home']);
            }else {
              this.firestore.doc(`profile/${this.authservice.getUID()}`).set({
                name: resp.user.displayName,
                email: resp.user.email
              });
         }
       })
     }
  
       
     })
    }catch(err){
      console.log(err);
    }
  }

  

  registerUser(){ 
    this.nav.navigateForward(['signup'])
  }

}
