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
  title = 'Электронные весы для торговли и складского учета';
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

    if (this.translate.currentLang) {
      this.test = this.translate.currentLang;
      console.log(this.test);
      this.localService.setJsonValue('lang', this.translate.currentLang);
    }

  }

  ngOnInit(): void {

    this.test = this.localService.getJsonValue('lang');
    console.log(this.test);

    if (this.localService.getJsonValue('lang') === null)
    {
      // this.translate.setDefaultLang('ru');
      this.localService.setJsonValue('lang', 'ru');
      // this.translate.use(this.localService.getJsonValue('ru'));
    }

    if (!this.translate.currentLang){
      this.router.navigate([this.localService.getJsonValue('lang')]);
    }
    // // this.lang = this.translate.getBrowserLang();
    // this.lang = this.localService.getJsonValue('lang');
    if (this.translate.currentLang){
      this.test = this.translate.currentLang;

      console.log(this.test);

      this.localService.setJsonValue('lang', this.translate.currentLang );

      console.log(this.localService.getJsonValue('lang'));

      this.translate.setDefaultLang(this.translate.currentLang);
      this.lang = this.translate.currentLang;
    } else {
      this.translate.setDefaultLang(this.lang);
      this.lang = this.localService.getJsonValue('lang');

    }
    console.log(window.location.href);
    console.log(this.router.getCurrentNavigation());
    // if (this.localService.getJsonValue('lang') === null) {
    //   this.localService.setJsonValue('lang', 'ru');
    //   this.translate.setDefaultLang('ru');
    // }

    const potentialToken = this.localService.getJsonValue('auth-token');
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }
  }
}
