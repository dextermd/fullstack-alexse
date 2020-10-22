import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth.service';
import { Title, Meta } from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'alexse';
  constructor(
    private auth: AuthService,
    router: Router
  ) {
    const navEndEvents = router.events.pipe(
      filter(
        event => event instanceof NavigationEnd
      )
    );

    navEndEvents.subscribe(
      (event: NavigationEnd) => {
        gtag('config', 'G-D2DN67SM8M', {
          page_path: event.urlAfterRedirects,
        });
      }
    );
  }

  ngOnInit(): void {
    // this.titleService.setTitle(this.title);
    const  potentialToken = localStorage.getItem('auth-token');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }
}
