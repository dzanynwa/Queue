import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';

var config = {
  apiKey: "AIzaSyAl-815sUp6sKW8pCzYtW6o4u5_wN2kW10",
  authDomain: "timetracker2-d9d0d.firebaseapp.com",
  databaseURL: "https://timetracker2-d9d0d.firebaseio.com",
  projectId: "timetracker2-d9d0d",
  storageBucket: "timetracker2-d9d0d.appspot.com",
  messagingSenderId: "947103918546"
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
