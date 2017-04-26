import { Mod07Page } from './app.po';

describe('mod07 App', () => {
  let page: Mod07Page;

  beforeEach(() => {
    page = new Mod07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
