import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import * as myJson from '../../assets/logins.json';
import { ToastrService } from 'ngx-toastr';
import {TestService}  from '../test.service';
import {LocalStorageService} from 'angular-web-storage'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username: string;
   password: string;
   value:string;
  loginsdata: any;
  
  constructor(private router:Router,private cookieService: CookieService,private toastr: ToastrService,
  private  testService:TestService,private localst:LocalStorageService) {

   }

  ngOnInit() {
    this.loginsdata = myJson['default']['data'];
    console.log(this.loginsdata);
  }
 
    
  login() : any {
    for(let data of this.loginsdata)
    if(this.username == data.usr && this.password == data.pw){
      // this.toastr.success('logged in');
      console.log(this.username);
      console.log(this.password);
      
      this.router.navigate(['table']);
      
    }
    this.cookieService.set('userinfo' ,this.username+" "+this.password);
   
    console.log("cookie set successfully");
    this.testService.SetUserInfo(this.username,this.password);
    console.log(this.testService.GetUserInfo());
}
}

