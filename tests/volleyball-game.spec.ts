import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/volleyball');
  await expect(page.getByText('Court 1TimeTeam 1Score 1Team')).toBeVisible();
  await expect(page.getByText('Court 2TimeTeam 1Score 1Team')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Volleyball Games for');
  await page.locator('td:nth-child(3) > input').first().click();
  await page.locator('td:nth-child(3) > input').first().fill('9');
  await page.locator('td:nth-child(3) > input').first().press('Enter');
  await expect(page.getByRole('cell', { name: '9', exact: true }).getByRole('spinbutton')).toHaveValue('9');
});
