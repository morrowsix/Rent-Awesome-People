import { test, expect } from '@playwright/test';

test('homepage has Awesome in title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);

  // create a locator
 // const getStarted = page.getByText('Get Started');

  // Expect an attribute "to be strictly equal" to the value.
 // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();

  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
});
