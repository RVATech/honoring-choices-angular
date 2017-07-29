import { HonoringChoicesAppPage } from './app.po';

describe('honoring-choices-app App', () => {
  let page: HonoringChoicesAppPage;

  beforeEach(() => {
    page = new HonoringChoicesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
