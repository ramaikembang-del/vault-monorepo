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

test.describe('Phase 5-6: Save/Load Workflow & Responsive Isolation', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Open Studio Tuner
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);
  });

  test('05.1 - Save menu opens when clicking Save button', async ({ page }) => {
    const saveButton = page.locator('button', { hasText: 'Save' }).first();
    await saveButton.click();
    await page.waitForTimeout(300);

    // Should see save options
    await expect(page.locator('text=Save Options')).toBeVisible();
  });

  test('05.2 - Save menu closes when clicking outside', async ({ page }) => {
    const saveButton = page.locator('button', { hasText: 'Save' }).first();
    await saveButton.click();
    await page.waitForTimeout(300);

    // Click somewhere outside the menu
    await page.click('body', { position: { x: 10, y: 10 } });
    await page.waitForTimeout(300);

    // Menu should close
    await expect(page.locator('text=Save Options')).not.toBeVisible();
  });

  test('05.3 - Quick save to localStorage works (Navbar)', async ({ page }) => {
    // Switch to Navbar tab
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    // Make a change
    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('75px');
    await page.waitForTimeout(300);

    // Open save menu and save
    const saveButton = page.locator('button', { hasText: 'Save' }).first();
    await saveButton.click();
    await page.waitForTimeout(300);

    const saveNavbarButton = page.locator('text=Save Navbar Styles');
    await saveNavbarButton.click();
    await page.waitForTimeout(500);

    // Verify localStorage has the value
    const saved = await page.evaluate(() => {
      const data = localStorage.getItem('studio-tuner-settings');
      return data ? JSON.parse(data) : null;
    });

    expect(saved).toBeTruthy();
    expect(saved.navbar).toBeTruthy();
    expect(saved.navbar['--nav-collapsed-width-desktop']).toBe('75px');
  });

  test('05.4 - Saved settings persist after page reload', async ({ page }) => {
    // Make a change
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('85px');
    await page.waitForTimeout(300);

    // Save
    const saveButton = page.locator('button', { hasText: 'Save' }).first();
    await saveButton.click();
    await page.waitForTimeout(300);

    const saveNavbarButton = page.locator('text=Save Navbar Styles');
    await saveNavbarButton.click();
    await page.waitForTimeout(500);

    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Verify CSS variable was restored
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(value).toBe('85px');
  });

  test('05.5 - Reset button reverts to hydrated defaults', async ({ page }) => {
    // Make a change
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    // Get original value
    const input = getInput(page, 'Width (Collapsed)');
    const originalValue = await input.inputValue();

    // Change it
    await input.fill('99px');
    await page.waitForTimeout(300);

    // Verify it changed
    let currentValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });
    expect(currentValue).toBe('99px');

    // Click reset
    const resetButton = page.locator('button[title="Reset Section"]');
    await resetButton.click();
    await page.waitForTimeout(500);

    // Should revert to original
    currentValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(currentValue).toBe(originalValue);
  });

  test('06.1 - Desktop values stay independent from Tablet values', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    // Expand Container section
    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    // Set Desktop value
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    await desktopButton.click();
    await page.waitForTimeout(300);

    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('100px');
    await page.waitForTimeout(300);

    // Get desktop value
    const desktopValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    // Switch to Tablet
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Get tablet value (should be different)
    const tabletValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-tablet').trim();
    });

    // Set Tablet to a different value
    await input.fill('auto');
    await page.waitForTimeout(300);

    // Switch back to Desktop
    await desktopButton.click();
    await page.waitForTimeout(300);

    // Verify Desktop value is still 100px
    const desktopValueAfter = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(desktopValueAfter).toBe('100px');
  });

  test('06.2 - Mobile values stay independent from Desktop values', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    // Set Desktop value
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    await desktopButton.click();
    await page.waitForTimeout(300);

    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('120px');
    await page.waitForTimeout(300);

    // Switch to Mobile
    const mobileButton = page.locator('button', { hasText: 'Mobile' });
    await mobileButton.click();
    await page.waitForTimeout(300);

    // Set Mobile value
    await input.fill('auto');
    await page.waitForTimeout(300);

    // Switch back to Desktop
    await desktopButton.click();
    await page.waitForTimeout(300);

    // Desktop value should still be 120px
    const desktopValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(desktopValue).toBe('120px');
  });

  test('06.3 - Shared (non-responsive) values work consistently across modes', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Corner Radius').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    // Set Corner Radius (shared value)
    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    await desktopButton.click();
    await page.waitForTimeout(300);

    const label = page.locator('text=Corner Radius').first();
    const slider = label.locator('..').locator('..').locator('input[type="range"]');
    await slider.fill('20');
    await page.waitForTimeout(300);

    // Switch to Tablet
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Shared value should be the same
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-radius').trim();
    });

    expect(value).toBe('20px');
  });
});
