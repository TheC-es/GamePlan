import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/schedule2');
  await page.getByRole('link', { name: 'Volleyball Schedule' }).click();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).click();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).fill('RED');
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 1' }).press('Enter');
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 2' }).dblclick();
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 2' }).fill('BLUE');
  await page.getByRole('textbox', { name: 'Court 1 - Monday 5:00 PM - Team 2' }).press('Shift+Enter');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 1' }).dblclick();
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 1' }).fill('YELLOW');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).dblclick();
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).fill('GREEN');
  await page.getByRole('textbox', { name: 'Court 2 - Monday 5:00 PM - Team 2' }).press('Enter');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('john@foo.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('changeme');
  await page.getByRole('button', { name: 'Sign in' }).click();
});