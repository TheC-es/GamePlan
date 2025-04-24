import { test, expect } from '@playwright/test';

const isWeekend = () => {
  const day = new Date().getDay();
  return day === 0 || day === 6;
};

test.describe('Schedule Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/basketball'); 
  });

  test('displays correct heading for today', async ({ page }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    await expect(page.locator('h1')).toHaveText(`Basketball Games for ${today}`);
  });

  const weekdayTest = isWeekend() ? test.skip : test;

  weekdayTest('renders both courts with time slots', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'Court1' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Court2' })).toBeVisible();

    const inputs = page.locator('input[type="text"]');
    await expect(inputs.first()).toBeVisible();
    await expect(inputs.count()).resolves.toBeGreaterThan(0);
  });

  weekdayTest('can update a team name and score', async ({ page }) => {
    const firstTeamInput = page.locator('input[type="text"]').first();
    const firstScoreInput = page.locator('input[type="number"]').first();

    await firstTeamInput.fill('Team Rocket');
    await expect(firstTeamInput).toHaveValue('Team Rocket');

    await firstScoreInput.fill('99');
    await expect(firstScoreInput).toHaveValue('99');
  });
});
