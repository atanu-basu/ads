import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin = {
    username: '',
    password: ''
  };
  public needsLogin:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  authenticate(){
    if(this.admin.username == 'admin' && this.admin.password == 'admin'){
      this.router.navigate(['/dashboard']);
    } else{
      this.needsLogin = true;
    }
  }
}
