import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alexse';

  constructor(
    private auth: AuthService,
    // private titleService: Title,
    // private meta: Meta,
  ) {

  }

  ngOnInit(): void {
    // this.titleService.setTitle(this.title);
    const  potentialToken = localStorage.getItem('auth-token');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }
}
