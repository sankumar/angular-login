import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 loginObj: any = {
  "EmailId": "",
  "Password":""
 };
 http = inject(HttpClient);
 constructor (private router: Router) {

 }
 onLogin() {
  this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res: any) => {
    console.log(res);
    if(res.result) {
      //alert("Login success");
      localStorage.setItem('loginToken', res.data.token);
      this.router.navigateByUrl("dashboard");

    } else {
      alert("Check username & password");
    }
  })
 }
}
