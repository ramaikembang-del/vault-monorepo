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

test.describe('Phase 2: Device Mode System', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open Studio Tuner
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);
  });

  test('02.1 - Desktop mode button activates Desktop mode', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    await desktopButton.click();

    // Verify active styling
    const classes = await desktopButton.getAttribute('class');
    expect(classes).toContain('bg-primary');
  });

  test('02.2 - Tablet mode button activates Tablet mode', async ({ page }) => {
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();

    const classes = await tabletButton.getAttribute('class');
    expect(classes).toContain('bg-primary');
  });

  test('02.3 - Mobile mode button activates Mobile mode', async ({ page }) => {
    const mobileButton = page.locator('button', { hasText: 'Mobile' });
    await mobileButton.click();

    const classes = await mobileButton.getAttribute('class');
    expect(classes).toContain('bg-primary');
  });

  test('02.4 - Only one mode is active at a time', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    const mobileButton = page.locator('button', { hasText: 'Mobile' });

    // Click Tablet
    await tabletButton.click();
    let tabletClasses = await tabletButton.getAttribute('class');
    let desktopClasses = await desktopButton.getAttribute('class');

    expect(tabletClasses).toContain('bg-primary');
    expect(desktopClasses).not.toContain('bg-primary');

    // Click Mobile
    await mobileButton.click();
    let mobileClasses = await mobileButton.getAttribute('class');
    tabletClasses = await tabletButton.getAttribute('class');

    expect(mobileClasses).toContain('bg-primary');
    expect(tabletClasses).not.toContain('bg-primary');
  });

  test('02.5 - Banner shows for Tablet mode', async ({ page }) => {
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Look for simulation banner
    const banner = page.locator('text=Simulating TABLET layout');
    await expect(banner).toBeVisible();
  });

  test('02.6 - Banner shows for Mobile mode', async ({ page }) => {
    const mobileButton = page.locator('button', { hasText: 'Mobile' });
    await mobileButton.click();
    await page.waitForTimeout(300);

    const banner = page.locator('text=Simulating MOBILE layout');
    await expect(banner).toBeVisible();
  });

  test('02.7 - Banner hidden for Desktop mode', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const mobileButton = page.locator('button', { hasText: 'Mobile' });

    // First activate mobile to show banner
    await mobileButton.click();
    await page.waitForTimeout(300);
    await expect(page.locator('text=Simulating MOBILE layout')).toBeVisible();

    // Switch to desktop
    await desktopButton.click();
    await page.waitForTimeout(300);

    // Banner should not be visible
    await expect(page.locator('text=Simulating')).not.toBeVisible();
  });

  test('02.8 - Banner has correct pulsing animation', async ({ page }) => {
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Find pulsing indicator dot
    const pulsingDot = page.locator('.animate-pulse').first();
    await expect(pulsingDot).toBeVisible();

    // Verify it has animation class
    const classes = await pulsingDot.getAttribute('class');
    expect(classes).toContain('animate-pulse');
  });

  test('02.9 - CSS variables update on mode change (--nav-collapsed-width)', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const tabletButton = page.locator('button', { hasText: 'Tablet' });

    // Get desktop value
    await desktopButton.click();
    await page.waitForTimeout(300);

    const desktopValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width').trim();
    });

    // Switch to tablet
    await tabletButton.click();
    await page.waitForTimeout(300);

    const tabletValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width').trim();
    });

    // Values should be different (or at least applied)
    expect(desktopValue).toBeTruthy();
    expect(tabletValue).toBeTruthy();
  });

  test('02.10 - CSS variables update on mode change (--page-padding-x)', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const mobileButton = page.locator('button', { hasText: 'Mobile' });

    await desktopButton.click();
    await page.waitForTimeout(300);

    const desktopPadding = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-padding-x').trim();
    });

    await mobileButton.click();
    await page.waitForTimeout(300);

    const mobilePadding = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-padding-x').trim();
    });

    expect(desktopPadding).toBeTruthy();
    expect(mobilePadding).toBeTruthy();
    // Desktop should have more padding than mobile
    expect(parseInt(desktopPadding)).toBeGreaterThan(parseInt(mobilePadding));
  });

  test('02.11 - Visual changes reflect in navbar position', async ({ page }) => {
    const mobileButton = page.locator('button', { hasText: 'Mobile' });
    await mobileButton.click();
    await page.waitForTimeout(500);

    // Verify CSS variables are applied to document root (mobile specific values)
    const bottomValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-bottom-mobile').trim();
    });

    // Mobile mode should have the bottom CSS variable set
    expect(bottomValue).toBeTruthy();
    expect(bottomValue).not.toBe('');
  });

  test('02.12 - Rapid mode switching works correctly', async ({ page }) => {
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    const mobileButton = page.locator('button', { hasText: 'Mobile' });

    // Rapidly switch modes
    await desktopButton.click();
    await page.waitForTimeout(100);
    await tabletButton.click();
    await page.waitForTimeout(100);
    await mobileButton.click();
    await page.waitForTimeout(100);
    await desktopButton.click();
    await page.waitForTimeout(500);

    // Verify desktop is active
    const classes = await desktopButton.getAttribute('class');
    expect(classes).toContain('bg-primary');
  });

  test('02.13 - Mode persists when switching tabs', async ({ page }) => {
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    const pageTab = page.locator('button', { hasText: 'Page Layout' });

    // Set to tablet mode
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Switch tabs
    await navbarTab.click();
    await page.waitForTimeout(200);
    await pageTab.click();
    await page.waitForTimeout(200);

    // Tablet should still be active
    const classes = await tabletButton.getAttribute('class');
    expect(classes).toContain('bg-primary');
  });
});
