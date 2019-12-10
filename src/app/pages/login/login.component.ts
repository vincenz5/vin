import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
    // this.errorMessage = '';
    // if (this.authService.isLogged()) {
    //     this.navigateTo();
    // }
  }

  // public login(email: string, password: string) {
  //     this.router.navigate(['sidenav'], { replaceUrl: true });
  // }

  // public async login(email: string, password: string) {
  //   try {
  //     const url = (await this.authService.mockLogin(
  //       email,
  //       password,
  //     )) as string;
  //     this.navigateTo(url);
  //   } catch (e) {
  //     this.errorMessage = 'Wrong Credentials!';
  //     console.error('Unable to Login!\n', e);
  //   }
  // }

  public navigateTo(url?: string) {
    url = url || 'nav';
    this.router.navigate([url], { replaceUrl: true });
  }

}
