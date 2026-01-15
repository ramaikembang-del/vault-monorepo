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

test.describe('Phase 7-8: Input Control Variety & Edge Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open Studio Tuner
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);
  });

  test('07.1 - Text inputs accept px values', async ({ page }) => {
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

    await input.fill('150px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(value).toBe('150px');
  });

  test('07.2 - Text inputs accept percentage values', async ({ page }) => {
    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();
    await page.waitForTimeout(300);

    const input = getInput(page, 'Page Max Width');

    await input.fill('90%');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-max-width').trim();
    });

    expect(value).toBe('90%');
  });

  test('07.3 - Text inputs accept keyword values (auto)', async ({ page }) => {
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

    await input.fill('auto');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(value).toBe('auto');
  });

  test('07.4 - Number slider respects min/max bounds', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const tabsSection = page.locator('text=Navigation Tabs');
    await tabsSection.click();
    await page.waitForTimeout(500);

    const label = page.locator('text=Hover Scale');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    // Try to set beyond max (should clamp)
    await slider.evaluate((el: HTMLInputElement) => {
      el.value = '2.0'; // Way beyond max of 1.1
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });

    await page.waitForTimeout(300);

    const sliderValue = await slider.evaluate((el: HTMLInputElement) => parseFloat(el.value));
    expect(sliderValue).toBeLessThanOrEqual(1.1);
  });

  test('07.5 - Opacity slider accepts decimal values (0-1)', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Background Opacity').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const label = page.locator('text=Background Opacity');
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    await slider.fill('0.65');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-bg-opacity').trim();
    });

    expect(parseFloat(value)).toBeCloseTo(0.65, 1);
  });

  test('07.6 - Dropdown shows all options', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Orientation').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const select = getSelect(page, 'Orientation');

    // Get all options
    const options = await select.locator('option').allTextContents();

    expect(options).toContain('column');
    expect(options).toContain('row');
  });

  test('07.7 - Dropdown selection updates value', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const tabsSection = page.locator('text=Navigation Tabs');
    await tabsSection.click();
    await page.waitForTimeout(500);

    const select = getSelect(page, 'Font Weight');

    await select.selectOption('600');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-font-weight').trim();
    });

    expect(value).toBe('600');
  });

  test('07.8 - Slider is draggable and updates value', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Corner Radius').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const label = page.locator('text=Corner Radius').first();
    const slider = label.locator('..').locator('..').locator('input[type="range"]');

    // Drag slider
    const box = await slider.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width * 0.75, box.y + box.height / 2);
      await page.mouse.up();
      await page.waitForTimeout(300);
    }

    // Value should have changed
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-radius').trim();
    });

    expect(value).toBeTruthy();
    expect(value).not.toBe('0px');
  });

  test('08.1 - Rapid mode switching with pending changes works', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const desktopButton = page.locator('button', { hasText: 'Desktop' });
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    const mobileButton = page.locator('button', { hasText: 'Mobile' });

    const input = getInput(page, 'Width (Collapsed)');

    // Make change in Desktop
    await desktopButton.click();
    await page.waitForTimeout(100);
    await input.fill('111px');

    // Rapidly switch without saving
    await tabletButton.click();
    await page.waitForTimeout(100);
    await mobileButton.click();
    await page.waitForTimeout(100);
    await desktopButton.click();
    await page.waitForTimeout(300);

    // Desktop change should still be there
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(value).toBe('111px');
  });

  test('08.2 - Concurrent changes to Navbar and Page work independently', async ({ page }) => {
    // Make Navbar change
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const navInput = getInput(page, 'Width (Collapsed)');
    await navInput.fill('88px');
    await page.waitForTimeout(300);

    // Switch to Page tab and make change
    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();
    await page.waitForTimeout(300);

    const pageInput = getInput(page, 'Padding X');
    await pageInput.fill('44px');
    await page.waitForTimeout(300);

    // Verify both changes applied
    const navValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    const pageValue = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--page-padding-x').trim();
    });

    expect(navValue).toBe('88px');
    expect(pageValue).toBe('44px');
  });

  test('08.3 - No console errors during normal operations', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Perform various operations
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    // Expand Container section properly
    await expandSection(page, 'Container');

    // Make a change
    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('77px');
    await page.waitForTimeout(300);

    // Switch modes
    const tabletButton = page.locator('button', { hasText: 'Tablet' });
    await tabletButton.click();
    await page.waitForTimeout(300);

    // Switch tabs
    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();
    await page.waitForTimeout(300);

    // Should have no console errors
    expect(consoleErrors.length).toBe(0);
  });

  test('08.4 - Panel closes and reopens without losing state', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    const navbarTab = page.locator('button', { hasText: 'Navbar' });

    // Make a change
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Width (Collapsed)').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    const input = getInput(page, 'Width (Collapsed)');
    await input.fill('95px');
    await page.waitForTimeout(300);

    // Close panel
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Reopen
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Should still be on Navbar tab
    const navbarClasses = await navbarTab.getAttribute('class');
    expect(navbarClasses).toContain('bg-background');

    // Value should still be applied
    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-collapsed-width-desktop').trim();
    });

    expect(value).toBe('95px');
  });

  test('08.5 - Individual corner radius controls work', async ({ page }) => {
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();
    await page.waitForTimeout(300);

    const containerSection = page.locator('text=Container').locator('..').locator('..');
    const isExpanded = await page.locator('text=Individual Corners').isVisible().catch(() => false);

    if (!isExpanded) {
      await containerSection.locator('button').first().click();
      await page.waitForTimeout(300);
    }

    // Expand Individual Corners details
    const detailsToggle = page.locator('text=Individual Corners');
    await detailsToggle.click();
    await page.waitForTimeout(300);

    // Set Top Left
    const topLeftInput = getInput(page, 'Top Left');
    await topLeftInput.fill('25px');
    await page.waitForTimeout(300);

    const value = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--nav-radius-tl').trim();
    });

    expect(value).toBe('25px');
  });
});
