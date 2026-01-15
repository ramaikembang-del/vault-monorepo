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

test.describe('Phase 3: Navbar Controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open Studio Tuner
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Switch to Navbar tab
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);
  });

  test('03.1 - Container section expands and collapses', async ({ page }) => {
    const containerSection = page.locator('text=Container').locator('..').locator('..');

    // Click to collapse (it starts expanded)
    await containerSection.locator('button').first().click();
    await page.waitForTimeout(500);

    // Click to expand again
    await containerSection.locator('button').first().click();
    await page.waitForTimeout(500);

    // Should see inputs
    await expect(page.locator('text=Width (Collapsed)')).toBeVisible();
  });

  test('03.2 - Width (Collapsed) input updates CSS variable', async ({ page }) => {
    // Expand Container section
    await expandSection(page, 'Container');

    // Find the input for Width (Collapsed)
    const input = getInput(page, 'Width (Collapsed)');

    // Get original value
    const originalValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    // Change value
    await input.fill('80px');
    await page.waitForTimeout(300);

    // Verify CSS variable updated
    const newValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(newValue).toBe('80px');
  });

  test('03.3 - Width (Expanded) input updates CSS variable', async ({ page }) => {
    // Expand Container section
    await expandSection(page, 'Container');

    const input = getInput(page, 'Width (Expanded)');

    await input.fill('300px');
    await page.waitForTimeout(300);

    const newValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-expanded-width-desktop').trim();
    });

    expect(newValue).toBe('300px');
  });

  test('03.4 - Orientation dropdown switches between column and row', async ({ page }) => {
    // Expand Container section
    await expandSection(page, 'Container');

    const select = getSelect(page, 'Orientation');

    await select.selectOption('row');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-direction-desktop').trim();
    });

    expect(value).toBe('row');
  });

  test('03.5 - Corner Radius slider updates CSS variable', async ({ page }) => {
    // Expand Container section
    await expandSection(page, 'Container');

    const label = page.locator('text=Corner Radius').first();
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    // Set slider to specific value
    await slider.fill('24');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-radius').trim();
    });

    expect(value).toBe('24px');
  });

  test('03.6 - Background Opacity slider works (0-1 range)', async ({ page }) => {
    // Expand Container section
    await expandSection(page, 'Container');

    const label = page.locator('text=Background Opacity');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('0.5');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-opacity').trim();
    });

    expect(parseFloat(value)).toBeCloseTo(0.5, 1);
  });

  test('03.7 - Logo section expands', async ({ page }) => {
    await expandSection(page, 'Logo / Brand');

    // Should see logo-specific controls
    await expect(page.locator('text=Logo Icon Box')).toBeVisible();
  });

  test('03.8 - Logo Icon Size updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Logo / Brand');

    // Use getSlider helper with exact label text to avoid matching "Logo Icon Box"
    const slider = getSlider(page, 'Logo Icon');

    await slider.fill('24');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-logo-icon-size').trim();
    });

    expect(value).toBe('24px');
  });

  test('03.9 - Navigation Tabs section expands', async ({ page }) => {
    await expandSection(page, 'Navigation Tabs');

    await expect(page.locator('text=Tab Height')).toBeVisible();
  });

  test('03.10 - Tab Height updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Navigation Tabs');

    const input = getInput(page, 'Tab Height');

    await input.fill('50px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-item-height').trim();
    });

    expect(value).toBe('50px');
  });

  test('03.11 - Font Weight dropdown works', async ({ page }) => {
    await expandSection(page, 'Navigation Tabs');

    const select = getSelect(page, 'Font Weight');

    await select.selectOption('700');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-font-weight').trim();
    });

    expect(value).toBe('700');
  });

  test('03.12 - Hover Scale slider updates CSS variable', async ({ page }) => {
    await expandSection(page, 'Navigation Tabs');

    const label = page.locator('text=Hover Scale');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('1.05');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-tab-hover-scale').trim();
    });

    expect(parseFloat(value)).toBeCloseTo(1.05, 2);
  });

  test('03.13 - Additional Elements section expands', async ({ page }) => {
    await expandSection(page, 'Additional Elements');

    await expect(page.locator('text=Theme Toggle')).toBeVisible();
  });

  test('03.14 - Animation section expands and Type dropdown works', async ({ page }) => {
    await expandSection(page, 'Animation');

    // Get all Type dropdowns and use the last one (Animation section)
    const typeLabels = page.locator('label').filter({ hasText: 'Type' });
    const count = await typeLabels.count();
    const lastLabel = typeLabels.nth(count - 1);
    const select = lastLabel.locator('..').locator('select');

    await select.selectOption('spring');
    await page.waitForTimeout(300);

    // Should see spring-specific controls
    await expect(page.locator('text=Stiffness').last()).toBeVisible();
    await expect(page.locator('text=Damping').last()).toBeVisible();
  });

  test('03.15 - Animation Type tween shows duration and easing', async ({ page }) => {
    await expandSection(page, 'Animation');

    // Get all Type dropdowns and use the last one (Animation section)
    const typeLabels = page.locator('label').filter({ hasText: 'Type' });
    const count = await typeLabels.count();
    const lastLabel = typeLabels.nth(count - 1);
    const select = lastLabel.locator('..').locator('select');

    await select.selectOption('tween');
    await page.waitForTimeout(300);

    // Should see tween-specific controls
    await expect(page.locator('text=Duration').last()).toBeVisible();
    await expect(page.locator('text=Easing').last()).toBeVisible();
  });
});
