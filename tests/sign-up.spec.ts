import { test, expect } from '@playwright/test';

test('User can sign up successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signup');

  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="password"]').fill('changeme');
  await page.locator('input[name="confirmPassword"]').fill('changeme');

  await page.getByRole('button', { name: 'Register' }).click();

  await page.waitForURL('http://localhost:3000/');

  await expect(page).toHaveURL('http://localhost:3000/');
});
