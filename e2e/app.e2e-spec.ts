import { ExempleFormulariPage } from './app.po';

describe('exemple-formulari App', () => {
  let page: ExempleFormulariPage;

  beforeEach(() => {
    page = new ExempleFormulariPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
