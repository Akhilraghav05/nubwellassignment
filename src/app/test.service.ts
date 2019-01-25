import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private cookieService: CookieService) { }

  public SetUserInfo=(data,data2)=>{
    localStorage.setItem('user-Info',JSON.stringify({user:data,password:data2}));
  }    

public GetUserInfo =()=>{
  // this.cookieService.get();
  return JSON.parse(localStorage.getItem('user-Info'));
}
 






}
