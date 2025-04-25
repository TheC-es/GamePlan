/* eslint-disable max-len */
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
  console.log('After clicking, Current URL:', page.url());
  await expect(page.getByText('AboutAt the Warrior Rec')).toBeVisible();
});
