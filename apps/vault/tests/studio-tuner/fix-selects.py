import re
import sys

def fix_select_patterns(content):
    """Fix select locators that only have one '..' """
    
    # Pattern: const select = label.locator('..').locator('select');
    # Should be: const select = label.locator('..').locator('..').locator('select');
    # But actually, let's just replace with getSelect() helper
    
    # Find lines like: const label = page.locator('text=XXX'); const select = label.locator('..').locator('select');
    lines = content.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line defines a label
        label_match = re.match(r"^(\s*)const label = page\.locator\('text=([^']+)'\)(\.first\(\))?;$", line)
        
        if label_match and i + 1 < len(lines):
            next_line = lines[i + 1]
            indent = label_match.group(1)
            label_text = label_match.group(2)
            
            # Check if next line uses the label for a select
            select_match = re.match(r"^" + indent + r"const select = label\.locator\('\.\.'\)\.locator\('select'\);$", next_line)
            
            if select_match:
                # Replace both lines with just the getSelect call
                result.append(f"{indent}const select = getSelect(page, '{label_text}');")
                i += 2  # Skip both lines
                continue
        
        result.append(line)
        i += 1
    
    return '\n'.join(result)

# Read file
if len(sys.argv) > 1:
    with open(sys.argv[1], 'r') as f:
        content = f.read()
else:
    content = sys.stdin.read()

# Apply fix
content = fix_select_patterns(content)

# Output
print(content, end='')
