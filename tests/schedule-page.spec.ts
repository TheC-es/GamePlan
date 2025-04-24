import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/schedule');
  await page.getByRole('link', { name: 'Basketball Schedule' }).click();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).click();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).fill('RED');
  await page.locator('tbody > tr > td:nth-child(3)').first().dblclick();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 2' }).fill('BLUE');
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 2' }).press('Enter');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 1' }).dblclick();
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 1' }).fill('YELLOW');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).dblclick();
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).fill('GREEN');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).press('Enter');
});
