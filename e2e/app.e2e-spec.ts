/**
 * e2e test spec
 * package website: http://www.protractortest.org
 * protractor cheetsheet: https://gist.github.com/javierarques/0c4c817d6c77b0877fda
 * config files: e2e/tsconfig.e2e - protractor.conf.js
 */

import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('cryptochain App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a title', () => {
    page.goToHome();
    expect(page.getTitle()).toEqual('Cryptochain');
  });
});
