import { test, expect } from '@playwright/test';

test.describe('About Us Page', () => {
  test('should display the header "Meet The Memebers"', async ({ page }) => {
    await page.goto('http://localhost:3000/aboutus'); 
    await expect(page.locator('h2')).toHaveText('Meet The Memebers');
  });

  test('should list all 5 team members', async ({ page }) => {
    await page.goto('http://localhost:3000/aboutus');
    const names = ['Alan Reeves', 'Anthony Nguyen', 'Simon Lin', 'Angelo Rosal', 'Maya Buchanan'];
    for (const name of names) {
      // eslint-disable-next-line no-await-in-loop
      await expect(page.locator('h3', { hasText: name })).toBeVisible();
    }
  });
});
