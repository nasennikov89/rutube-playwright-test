import { test, expect } from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('test', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rutube.ru/');
  await page.getByRole('button', { name: 'Закрыть', exact: true }).click();
  await page.getByRole('button', { name: 'Вход и регистрация' }).click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон' })
    .fill('89994653616');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page.locator('iframe[title="Multipass"]').contentFrame().locator('#login-password').click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill('Password!10');
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByRole('img', { name: 'Иконка канала channel71995751' }).click();
  await page.getByRole('link', { name: 'Профиль' }).click();

  await page.context().storageState({ path: authFile });
});
