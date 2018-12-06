import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { CookieService } from 'ngx-cookie-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  cookieValue = 'UNKNOWN';
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private cookieService: CookieService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.cookieService.set( 'Test', 'Hello World' );
      this.cookieValue = this.cookieService.get('Test');
    });
  }
}
