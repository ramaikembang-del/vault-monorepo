import { test, expect } from '@playwright/test';
// Helper to get StudioTuner toggle button
const getToggleButton = (page: any) => page.locator('.fixed.bottom-4.right-4 button').first();

// Helper to expand a section if it's collapsed
const expandSection = async (page: any, sectionName: string) => {
  // Find the button element that contains this section's title
  // The section structure is: <button> containing title text and a ChevronDown icon
  const sectionButton = page.locator('button').filter({ hasText: sectionName });

  // Check if it's expanded by looking for rotate-180 class on the icon inside the button
  const icon = sectionButton.locator('svg').first();
  const iconClass = await icon.getAttribute('class');
  const isExpanded = iconClass?.includes('rotate-180') || false;

  if (!isExpanded) {
    await sectionButton.click();
    await page.waitForTimeout(500);
  }
};

// Helper to get input/slider/select elements by label text
// Input component structure: label is 2 levels up from the input elements
const getInput = (page: any, labelText: string) => {
  // Text input is always the last input in the container
  return page.locator(`text=${labelText}`).locator('..').locator('..').locator('input').last();
};

const getSlider = (page: any, labelText: string) => {
  // Match only label elements to avoid ambiguous matches
  const label = page.locator('label').filter({ hasText: labelText });
  return label.locator('..').locator('..').locator('input[type="range"]');
};

const getSelect = (page: any, labelText: string) => {
  // For dropdown inputs, select is 1 level up (sibling of label)
  // Match only label elements to avoid matching other text on the page
  const label = page.locator('label').filter({ hasText: labelText });
  const parentContainer = label.locator('..');
  const dropdown = parentContainer.locator('select');

  return dropdown;
};

test.describe('Phase 4: Page Controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open Studio Tuner
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Stay on Page Layout tab (default)
    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();
    await page.waitForTimeout(300);
  });

  test('04.1 - Global Theme / This Page mode switcher works', async ({ page }) => {
    const globalButton = page.locator('button', { hasText: 'Global Theme' });
    const thisPageButton = page.locator('button', { hasText: 'This Page' });

    await globalButton.click();
    const globalClasses = await globalButton.getAttribute('class');
    expect(globalClasses).toContain('bg-primary');

    await thisPageButton.click();
    const pageClasses = await thisPageButton.getAttribute('class');
    expect(pageClasses).toContain('bg-primary');
  });

  test('04.2 - Layout & Container section expands by default', async ({ page }) => {
    // Should see layout controls immediately
    await expect(page.locator('text=Page Max Width')).toBeVisible();
    await expect(page.locator('text=Padding X')).toBeVisible();
  });

  test('04.3 - Padding X updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Layout & Container');

    const input = getInput(page, 'Padding X');

    await input.fill('40px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-padding-x').trim();
    });

    expect(value).toBe('40px');
  });

  test('04.4 - Padding Y updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Layout & Container');

    const input = getInput(page, 'Padding Y');

    await input.fill('50px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-padding-y').trim();
    });

    expect(value).toBe('50px');
  });

  test('04.5 - Section Gap updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Layout & Container');

    const input = getInput(page, 'Section Gap');

    await input.fill('60px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-section-gap').trim();
    });

    expect(value).toBe('60px');
  });

  test('04.6 - Page Max Width updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Layout & Container');

    const input = getInput(page, 'Page Max Width');

    await input.fill('1200px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-max-width').trim();
    });

    expect(value).toBe('1200px');
  });

  test('04.7 - Grid System section expands', async ({ page }) => {
    await expandSection(page, 'Grid System');

    await expect(page.locator('text=Grid Gap')).toBeVisible();
    await expect(page.locator('text=Card Gap')).toBeVisible();
  });

  test('04.8 - Grid Gap updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Grid System');

    const input = getInput(page, 'Grid Gap');

    await input.fill('32px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-grid-gap').trim();
    });

    expect(value).toBe('32px');
  });

  test('04.9 - Typography section expands', async ({ page }) => {
    await expandSection(page, 'Typography');

    await expect(page.locator('text=H1 Size')).toBeVisible();
    await expect(page.locator('text=H2 Size')).toBeVisible();
  });

  test('04.10 - H1 Size updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Typography');

    const input = getInput(page, 'H1 Size');

    await input.fill('48px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-h1-size').trim();
    });

    expect(value).toBe('48px');
  });

  test('04.11 - Body Size updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Typography');

    const input = getInput(page, 'Body Size');

    await input.fill('18px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-body-size').trim();
    });

    expect(value).toBe('18px');
  });

  test('04.12 - Line Height updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Typography');

    const input = getInput(page, 'Line Height');

    await input.fill('1.8');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-line-height').trim();
    });

    expect(value).toBe('1.8');
  });

  test('04.13 - Components section expands', async ({ page }) => {
    await expandSection(page, 'Components');

    await expect(page.locator('text=Card Radius')).toBeVisible();
    await expect(page.locator('text=Button Radius')).toBeVisible();
  });

  test('04.14 - Card Radius updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Components');

    const input = getInput(page, 'Card Radius');

    await input.fill('16px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-card-radius').trim();
    });

    expect(value).toBe('16px');
  });

  test('04.15 - Hover Scale slider updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Components');

    const label = page.locator('text=Hover Scale').first();
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('1.05');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-hover-scale').trim();
    });

    expect(parseFloat(value)).toBeCloseTo(1.05, 2);
  });

  test('04.16 - Animation section expands', async ({ page }) => {
    await expandSection(page, 'Animation');

    await expect(page.locator('text=Type').last()).toBeVisible();
  });

  test('04.17 - Theme Colors section expands', async ({ page }) => {
    await expandSection(page, 'Theme Colors');

    await expect(page.locator('text=Hue')).toBeVisible();
    await expect(page.locator('text=Saturation')).toBeVisible();
  });

  test('04.18 - Accent Hue slider updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Theme Colors');

    const label = page.locator('text=Hue').first();
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('180');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-accent-hue').trim();
    });

    expect(value).toBe('180');
  });

  test('04.19 - Saturation slider updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Theme Colors');

    const label = page.locator('text=Saturation');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('75');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-accent-sat').trim();
    });

    expect(value).toBe('75%');
  });

  test('04.20 - Card BG Opacity slider updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Theme Colors');

    const label = page.locator('text=Card BG');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('0.9');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-card-bg-opacity').trim();
    });

    expect(parseFloat(value)).toBeCloseTo(0.9, 1);
  });
});
