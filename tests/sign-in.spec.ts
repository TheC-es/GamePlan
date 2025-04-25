/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { test, expect } from '@playwright/test';

test.use({
  storageState: 'sign-in.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signin');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('changeme');
  console.log('Before clicking sign in - Current URL:', page.url());
  await page.getByRole('button', { name: 'Sign in' }).click();
  // if successful, url will change to landing page.
  await page.waitForURL('http://localhost:3000/');
});
