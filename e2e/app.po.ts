import { browser, by, element } from 'protractor';

export class AppPage {
  goToHome() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
