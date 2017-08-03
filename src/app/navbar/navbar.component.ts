import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.title =  'Angular Firebase Gallery';
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
