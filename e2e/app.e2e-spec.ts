import { SchedulerAppPage } from './app.po';

describe('scheduler-app App', () => {
  let page: SchedulerAppPage;

  beforeEach(() => {
    page = new SchedulerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
