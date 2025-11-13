import { BasePage } from './BasePage';

export class ForCreatorPage extends BasePage {
  readonly testParams = [
    {
      url: 'https://rutube.ru/for_creators/#main',
      screenshotName: 'mainTab.png',
    },
    {
      url: 'https://rutube.ru/for_creators/#steps',
      screenshotName: 'stepsTab.png',
    },
    {
      url: 'https://rutube.ru/for_creators/#faq',
      screenshotName: 'faqTab.png',
    },
    {
      url: 'https://rutube.ru/for_creators/#monetization',
      screenshotName: 'monetizationTab.png',
    },
    {
      url: 'https://rutube.ru/for_creators/#rules',
      screenshotName: 'rulesTab.png',
    },
    {
      url: 'https://rutube.ru/for_creators/#team',
      screenshotName: 'tea,Tab.png',
    },
  ];

  constructor(page: Page) {
    super(page);
  }
  open(url: string) {
    this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    this.checkLayoutbyScreenshot;
  }
}
