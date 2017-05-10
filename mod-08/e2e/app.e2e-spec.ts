import { Mod08Page } from './app.po';

describe('mod08 App', () => {
  let page: Mod08Page;

  beforeEach(() => {
    page = new Mod08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
