import { Bootstrap3AngularReactiveFormsPage } from './app.po';

describe('bootstrap3-angular-reactive-forms App', () => {
  let page: Bootstrap3AngularReactiveFormsPage;

  beforeEach(() => {
    page = new Bootstrap3AngularReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
