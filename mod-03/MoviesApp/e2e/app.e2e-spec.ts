import { MoviesAppPage } from './app.po';

describe('movies-app App', () => {
  let page: MoviesAppPage;

  beforeEach(() => {
    page = new MoviesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
