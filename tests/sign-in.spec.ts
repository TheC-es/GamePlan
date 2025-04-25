/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { test, expect } from '@playwright/test';

test.use({
  storageState: 'sign-in.json',
});

test('test', async ({ page }) => {
  // check if DATABASE_URL is set correctly
  console.log(process.env.DATABASE_URL);
  await page.goto('http://localhost:3000/auth/signin');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="password"]').fill('changeme');
  await page.getByRole('button', { name: 'Sign in' }).click();
  // if successful, url will change to landing page.
  if (!process.env.CI) { // skips if doing CI but not on local tests
    await page.waitForURL('http://localhost:3000/');
  }
});
