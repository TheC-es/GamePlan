import { test, expect } from '@playwright/test';

test('User can sign out successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/signout');

  await page.getByRole('button', { name: 'Sign Out' }).click();

  await page.waitForURL('http://localhost:3000/');

  await expect(page).toHaveURL('http://localhost:3000/');
});
