import { Angular2TestAuthPage } from './app.po';

describe('angular2-test-auth App', () => {
  let page: Angular2TestAuthPage;

  beforeEach(() => {
    page = new Angular2TestAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
