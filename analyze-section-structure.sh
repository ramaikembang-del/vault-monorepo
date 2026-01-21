#!/bin/bash
file="C:\Users\Adeandza Haqia\Desktop\Sakamoto\vault-monorepo\docs\prds\14-app-settings-prd.md"

echo "SECTION STRUCTURE ANALYSIS"
echo "=========================="
echo ""

for section in 3 4 5 6 7 8 9 10 11 12 13 14 15 16; do
    echo "Section $section:"
    awk "/^## $section\./,/^## [0-9]+\./ {if (/^\*\*Features:\*\*/) print \"  - Has Features list\"; if (/^\*\*Actions:\*\*/) print \"  - Has Actions list\"; if (/^\*\*Integrations:\*\*/) print \"  - Has Integrations list\"; if (/^\*\*UI Configuration:\*\*/ || /^interface /) print \"  - Has Code Example\"; if (/^\*\*Example Setting UI:\*\*/ || /^```$/) print \"  - Has UI Mockup\"}" "$file" | sort -u
    echo ""
done
