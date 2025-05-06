/* eslint-disable max-len */
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/schedule');
  await page.getByRole('heading', { name: 'Basketball Court Schedule' }).click();
  await page.getByRole('heading', { name: 'Court 1' }).click();
  await page.getByRole('heading', { name: 'Court 2' }).click();
  await expect(page.getByText('Court 1TimeMondayTuesdayWednesdayThursdayFridayTeam 1Team 2Team 1Team 2Team')).toBeVisible();
  await expect(page.getByText('Court 2TimeMondayTuesdayWednesdayThursdayFridayTeam 1Team 2Team 1Team 2Team')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Basketball Court Schedule');
});