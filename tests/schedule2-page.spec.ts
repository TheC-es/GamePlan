/* eslint-disable max-len */
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/schedule2');
  await expect(page.getByText('Court 1TimeMondayTuesdayWednesdayThursdayFridayTeam 1Team 2Team 1Team 2Team')).toBeVisible();
  await expect(page.getByText('Court 2TimeMondayTuesdayWednesdayThursdayFridayTeam 1Team 2Team 1Team 2Team')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Volleyball Court Schedule');
});
