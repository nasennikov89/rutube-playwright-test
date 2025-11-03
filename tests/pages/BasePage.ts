import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeCoockiesAlert() {
    await this.page.getByRole('button', { name: 'Ок' }).click();
  }
}
