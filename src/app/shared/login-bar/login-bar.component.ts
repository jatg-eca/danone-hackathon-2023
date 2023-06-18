import { Component } from '@angular/core';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent {

  isUserLogged: boolean = false;

  ngOnInit(): void {

  }

  logUser(): void {
    this.isUserLogged = true;
  }

  logout(): void {
    this.isUserLogged = false;
  }

}
