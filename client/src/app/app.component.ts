import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {AuthService} from './shared/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {LocalService} from './shared/local.service';
import {TranslateService} from '@ngx-translate/core';


declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = '';
  lang;
  test;

  constructor(
    private auth: AuthService,
    private router: Router,
    private localService: LocalService,
    public translate: TranslateService,
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

    // this.test = this.translate.currentLang;
    // console.log('Current lang ' + this.test);
    console.log('Current lang ' + this.translate.getBrowserLang());



    const potentialToken = this.localService.getJsonValue('auth-token');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }
}
