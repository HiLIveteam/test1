import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChatsPage } from '../chats/chats';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatsPage;
  tab3Root = AccountPage;
  constructor() {

  }
}
