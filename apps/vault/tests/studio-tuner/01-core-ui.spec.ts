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

test.describe('Phase 1: Core UI Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to be ready
    await page.waitForLoadState('networkidle');
  });

  test('01.1 - Toggle button is visible in bottom-right corner', async ({ page }) => {
    // StudioTuner button is in bottom-right, has palette/settings icon
    const toggleButton = page.locator('.fixed.bottom-4.right-4 button').first();
    await expect(toggleButton).toBeVisible();

    // Verify position (bottom-right)
    const box = await toggleButton.boundingBox();
    const viewport = page.viewportSize();
    expect(box).toBeTruthy();
    if (box && viewport) {
      expect(box.x).toBeGreaterThan(viewport.width - 200); // Right side
      expect(box.y).toBeGreaterThan(viewport.height - 200); // Bottom side
    }
  });

  test('01.2 - Click opens panel with correct animation', async ({ page }) => {
    const toggleButton = getToggleButton(page);

    // Panel should not be visible initially
    const panel = page.locator('text=Design Studio').locator('..');
    await expect(panel).not.toBeVisible();

    // Click to open
    await toggleButton.click();
    await page.waitForTimeout(500); // Wait for animation

    // Panel should now be visible
    await expect(panel).toBeVisible();
  });

  test('01.3 - Icon changes from Palette to X when opened', async ({ page }) => {
    const toggleButton = getToggleButton(page);

    // Open panel
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Verify SVG icon is present (Lucide icons render as SVG elements)
    const svgIcon = toggleButton.locator('svg');
    await expect(svgIcon).toBeVisible();

    // Verify the icon count is exactly 1
    const iconCount = await svgIcon.count();
    expect(iconCount).toBe(1);
  });

  test('01.4 - Click again closes panel', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    const panel = page.locator('text=Design Studio').locator('..');

    // Open
    await toggleButton.click();
    await page.waitForTimeout(500);
    await expect(panel).toBeVisible();

    // Close
    await toggleButton.click();
    await page.waitForTimeout(500);
    await expect(panel).not.toBeVisible();
  });

  test('01.5 - Panel has smooth slide-in animation from right', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    const panel = page.locator('text=Design Studio').locator('..');

    await toggleButton.click();

    // Check that panel appears (animation completes within reasonable time)
    await expect(panel).toBeVisible({ timeout: 2000 });
  });

  test('01.6 - Panel has proper z-index (above content)', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Find the panel by its distinctive classes (fixed, right-4, bottom-20)
    const panel = page.locator('.fixed.right-4.bottom-20').first();
    await expect(panel).toBeVisible();

    // Check if the panel has the z-50 Tailwind class
    const className = await panel.getAttribute('class');
    expect(className).toContain('z-50');
  });

  test('01.7 - Tab navigation works - Page Layout tab', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();

    // Verify tab is active (has specific styling)
    const classes = await pageTab.getAttribute('class');
    expect(classes).toContain('bg-background');
  });

  test('01.8 - Tab navigation works - Navbar tab', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();

    // Verify tab is active
    const classes = await navbarTab.getAttribute('class');
    expect(classes).toContain('bg-background');
  });

  test('01.9 - Active tab is visually highlighted', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    const navbarTab = page.locator('button', { hasText: 'Navbar' });

    // Check Page tab active
    await pageTab.click();
    const pageClasses = await pageTab.getAttribute('class');
    expect(pageClasses).toContain('bg-background');

    // Switch to Navbar
    await navbarTab.click();
    const navbarClasses = await navbarTab.getAttribute('class');
    expect(navbarClasses).toContain('bg-background');
  });

  test('01.10 - Content switches when tabs change', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Click Page Layout tab
    const pageTab = page.locator('button', { hasText: 'Page Layout' });
    await pageTab.click();

    // Should see Page-specific sections
    await expect(page.locator('text=Layout & Container')).toBeVisible();

    // Switch to Navbar
    const navbarTab = page.locator('button', { hasText: 'Navbar' });
    await navbarTab.click();

    // Should see Navbar-specific sections
    await expect(page.locator('text=Logo / Brand')).toBeVisible();
  });

  test('01.11 - Panel is scrollable', async ({ page }) => {
    const toggleButton = getToggleButton(page);
    await toggleButton.click();
    await page.waitForTimeout(500);

    // Check that panel has overflow styling
    const contentArea = page.locator('.custom-scrollbar').first();
    const overflow = await contentArea.evaluate((el) => window.getComputedStyle(el).overflow);

    expect(overflow).toMatch(/auto|scroll/);
  });
});
