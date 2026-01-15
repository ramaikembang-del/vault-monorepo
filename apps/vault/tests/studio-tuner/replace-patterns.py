import re
import sys

def fix_input_locators(content):
    """Replace old input locator patterns with getInput() helper"""
    
    # Pattern 1: const label = page.locator('text=XXX').first(); const input = label.locator('..').locator('input[type="text"]');
    # Replace with: const input = getInput(page, 'XXX');
    pattern1 = r"    const label = page\.locator\('text=([^']+)'\)\.first\(\);\n    const input = label\.locator\('\.\.'\)\.locator\('input\[type=\"text\"\]'\);"
    content = re.sub(pattern1, r"    const input = getInput(page, '\1');", content)
    
    # Pattern 2: const label = page.locator('text=XXX'); const input = label.locator('..').locator('input[type="text"]');
    # Replace with: const input = getInput(page, 'XXX');
    pattern2 = r"    const label = page\.locator\('text=([^']+)'\);\n    const input = label\.locator\('\.\.'\)\.locator\('input\[type=\"text\"\]'\);"
    content = re.sub(pattern2, r"    const input = getInput(page, '\1');", content)
    
    return content

def fix_slider_locators(content):
    """Fix slider locators that only have one '..' """
    
    # Pattern: const slider = label.locator('..').locator('..').locator('input[type="range"]');
    # These are already correct, but let's replace any that are using the helper pattern
    
    # Pattern: const label = page.locator('text=XXX'); const slider = label.locator('..').locator('input[type="range"]');
    # Should be: const slider = getSlider(page, 'XXX');
    pattern = r"    const label = page\.locator\('text=([^']+)'\)(\.first\(\))?;\n    const slider = label\.locator\('\.\.'\)\.locator\('input\[type=\"range\"\]'\);"
    content = re.sub(pattern, r"    const slider = getSlider(page, '\1');", content)
    
    return content

def fix_select_locators(content):
    """Replace old select locator patterns with getSelect() helper"""
    
    # Pattern: const label = page.locator('text=XXX'); const select = label.locator('..').locator('select');
    # Replace with: const select = getSelect(page, 'XXX');
    pattern = r"    const label = page\.locator\('text=([^']+)'\)(\.first\(\))?;\n    const select = label\.locator\('\.\.'\)\.locator\('select'\);"
    content = re.sub(pattern, r"    const select = getSelect(page, '\1');", content)
    
    return content

# Read stdin or file
if len(sys.argv) > 1:
    with open(sys.argv[1], 'r') as f:
        content = f.read()
else:
    content = sys.stdin.read()

# Apply fixes
content = fix_input_locators(content)
content = fix_slider_locators(content)
content = fix_select_locators(content)

# Output
print(content, end='')
