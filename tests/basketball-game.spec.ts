import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/volleyball');
  await expect(page.getByText('Court 1TimeTeam 1Score 1Team')).toBeVisible();
  await expect(page.getByText('Court 2TimeTeam 1Score 1Team')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Basketball Games for');
});
