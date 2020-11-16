import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {AuthService} from './shared/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {LocalService} from './shared/local.service';
import {TranslateService} from '@ngx-translate/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Электронные весы для торговли и складского учета';

  constructor(
    private auth: AuthService,
    router: Router,
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
    if (this.localService.getJsonValue('lang') === null) {
      this.localService.setJsonValue('lang', 'ru');
      this.translate.setDefaultLang('ru');
    }
    const potentialToken = this.localService.getJsonValue('auth-token');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }
}
