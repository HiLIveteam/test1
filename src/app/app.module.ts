import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { AddreviewPage } from '../pages/addreview/addreview';
import { ChatsPage } from '../pages/chats/chats';
import { ChattingPage } from '../pages/chatting/chatting';
import { ConditionPage } from '../pages/condition/condition';
import { Edit_offerPage } from '../pages/edit_offer/edit_offer';
import { Edit_eventPage } from '../pages/edit_event/edit_event';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { OfferdetailPage } from '../pages/offerdetail/offerdetail';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ReviewPage } from '../pages/review/review';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { TabsPage } from '../pages/tabs/tabs';
import { TestPage } from '../pages/test/test';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDiZHuSvzbcwStS6aRR3Y_EQR7EJWu33mc",
  authDomain: "hilive-websummit.firebaseapp.com",
  databaseURL: "https://hilive-websummit.firebaseio.com",
  projectId: "hilive-websummit",
  storageBucket: "",
  messagingSenderId: "198955310317",
};

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddreviewPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    Edit_offerPage,
    Edit_eventPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SearchPage,
    SigninPage,
    TabsPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
