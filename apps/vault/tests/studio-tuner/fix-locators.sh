#!/bin/bash

# Function to add helpers to a file
add_helpers() {
    local file="$1"
    
    # Check if helpers already exist
    if grep -q "const getInput = " "$file"; then
        echo "Helpers already exist in $file"
        return
    fi
    
    # Add helpers after expandSection
    sed -i '/^};$/a\
\
// Helper to get input/slider/select elements by label text\
// Input component structure: label is 2 levels up from the input elements\
const getInput = (page: any, labelText: string) => {\
  // Text input is always the last input in the container\
  return page.locator(`text=${labelText}`).locator('\''..'\''). locator('\''..'\''). locator('\''input'\''). last();\
};\
\
const getSlider = (page: any, labelText: string) => {\
  return page.locator(`text=${labelText}`).locator('\''..'\''). locator('\''..'\''). locator('\''input[type="range"]'\'');\
};\
\
const getSelect = (page: any, labelText: string) => {\
  return page.locator(`text=${labelText}`).locator('\''..'\''). locator('\''..'\''). locator('\''select'\''). first();\
};' "$file"
    
    echo "Added helpers to $file"
}

# Add helpers to remaining files
for file in 05-persistence.spec.ts 06-edge-cases.spec.ts 02-device-modes.spec.ts 01-core-ui.spec.ts; do
    if [ -f "$file" ]; then
        add_helpers "$file"
    fi
done

echo "Done adding helpers"
